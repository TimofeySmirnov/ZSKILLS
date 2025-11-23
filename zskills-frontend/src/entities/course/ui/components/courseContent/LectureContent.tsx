"use client";

import { useSelectedLesson } from "@/entities/course/models/course.hooks";
import { changeLection } from "@/entities/course/models/course.slice";
import Button from "@/shared/ui/Button";
import Editor from "@/shared/ui/editor/Editor";
import { useAppDispatch } from "@/store/store";
import { OutputData } from "@editorjs/editorjs";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

export default function LectureContent() {
  const lesson = useSelectedLesson();
  const [ready, setReady] = useState(false);
  const [content, setContent] = useState<OutputData | undefined>(undefined);
  useEffect(() => {
    if (lesson === "main") return;

    setReady(false);
    setContent(undefined);

    const timeout = setTimeout(() => {
      setContent(lesson.content);
      setReady(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, [lesson]);
  const dispatch = useAppDispatch();
  if (lesson === "main") return null;
  const handleSave = () => {
    dispatch(changeLection({ id: lesson.id, data: content }));
  };
  return (
    <div className="max-w-4/5 w-4/5 mx-auto">
      {ready ? (
        <>
          <Editor data={content} onChange={(e) => setContent(e)} />
          {content && (
            <div className="flex justify-center">
              <Button
                title="Сохранить"
                width="inline"
                mode="darkgreen"
                onClick={handleSave}
              />
            </div>
          )}
        </>
      ) : (
        <Loader className="animate-spin text-neutral-500"/>
      )}
    </div>
  );
}
