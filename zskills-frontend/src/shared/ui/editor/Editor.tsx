"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import { ruConfig } from "./editorjs.translate";

type EditorProps = {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
};

export default function Editor({ data, onChange }: EditorProps) {
  const ref = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        data: data,
        i18n: ruConfig,

        tools: {
          paragraph: Paragraph,
          header: {
            //@ts-ignore
            class: Header,
            inlineToolbar: true,
            config: {
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
          },
          code: Code,
        },

        async onChange() {
          const output = await editor.save();
          onChange?.(output);
        },
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current?.destroy) {
        ref.current.destroy();
        ref.current = null;
      }
    };
  }, []);

  return <div id="editorjs" className="prose max-w-full" />;
}
