"use client";

import Modal from "@/shared/ui/Modal";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddQuestionForm from "./AddQuestionForm";

export default function AddTestSection() {
  const [add, setAdd] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center gap-2 bg-neutral-200 text-black rounded-xl opacity-100 hover:opacity-80  duration-100 py-6 px-12 w-3/5 hover:cursor-pointer select-none"
        role="button"
        onClick={() => setAdd(true)}
      >
        <Plus width={22} height={22} />
        <h3 className="text-xl font-bold text-neutral-700">Добавить вопрос</h3>
      </div>
      {add && (
        <Modal onClose={() => setAdd(false)}>
            <AddQuestionForm onClose={() => setAdd(false)}/>
        </Modal>
      )}
    </>
  );
}
