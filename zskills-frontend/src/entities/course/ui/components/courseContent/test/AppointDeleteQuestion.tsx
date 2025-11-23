'use client'

import { deleteQuestionThunk } from "@/entities/course-test/models/course-test.slice";
import { TestQuestionWithType } from "@/entities/course/course.types";
import Button from "@/shared/ui/Button";
import { useAppDispatch } from "@/store/store";

type AppointDeleteQuestionProps = {
  onClose: () => void;
  question: TestQuestionWithType;
};

export default function AppointDeleteQuestion({
  onClose,
  question,
}: AppointDeleteQuestionProps) {
    const dispatch = useAppDispatch()
    const handleClick = async () => {
        const res = await dispatch(deleteQuestionThunk(question.id)).unwrap()
        if(res) {
            onClose()
        }
    }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-neutral-700 text-lg">
        Вы действительно хотите удалть вопрос: <span className="font-bold">{question.question}</span>
      </h1>
      <div className="flex flex-col gap-2">
        <Button title="Отмена" mode="darkgreen" onClick={onClose}/>
        <Button title="Удалить" hover="red" onClick={handleClick}/>
      </div>
    </div>
  );
}
