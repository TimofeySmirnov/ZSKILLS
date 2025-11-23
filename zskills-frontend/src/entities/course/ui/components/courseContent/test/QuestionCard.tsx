import {
  TestQuestionWithArraAnswers,
  TestQuestionWithType,
} from "@/entities/course/course.types";
import IconButton from "@/shared/ui/IconButton";
import Input from "@/shared/ui/Input";
import Modal from "@/shared/ui/Modal";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import AppointDeleteQuestion from "./AppointDeleteQuestion";
import AddQuestionForm from "./AddQuestionForm";

export default function QuestionCard({
  question,
}: {
  question: TestQuestionWithType;
}) {
  const [del, setDel] = useState(false);
  const [updt, setUpdt] = useState(false);
  return (
    <div className="flex flex-col gap-6 rounded-lg shadow-lg px-6 py-4 w-4/5">
      <div className="flex justify-between items-center gap-4">
        <h2 className="font-semibold text-neutral-700 text-lg">
          {question.question}
        </h2>
        <div className="flex flex-col gap-2">
          <IconButton
            icon={
              <Pencil
                className="text-neutral-400 hover:text-emerald-400 transition-colors"
                onClick={() => setUpdt(true)}
              />
            }
          />
          <IconButton
            icon={
              <Trash2 className="text-neutral-400 hover:text-red-500 transition-colors" />
            }
            onClick={() => setDel(true)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[80%_auto] uppercase text-sm">
          <span>Ответ</span>
          <span>Правильный</span>
        </div>
        <div className="flex flex-col gap-2">
          {Object.entries(question.answers).map(([Key, value]) => (
            <div
              key={Key}
              className="grid grid-cols-[80%_auto] gap-2 border-neutral-400 border-b-1 pb-2 last:border-b-0"
            >
              <h3>{value.answer}</h3>
              <div className="flex pl-6">
                <Input
                  type="checkbox"
                  checked={value.isCorrect}
                  disabled
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {del && (
        <Modal onClose={() => setDel(false)}>
          <AppointDeleteQuestion
            onClose={() => setDel(false)}
            question={question}
          />
        </Modal>
      )}
      {updt && (
        <Modal onClose={() => setUpdt(false)}>
          <AddQuestionForm
            onClose={() => setUpdt(false)}
            oldData={question}
          />
        </Modal>
      )}
    </div>
  );
}
