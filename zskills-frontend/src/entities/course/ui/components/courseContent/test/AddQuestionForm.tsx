"use client";

import {
  addQuestionThunk,
  updateQuestionThunk,
} from "@/entities/course-test/models/course-test.slice";
import {
  AnswerType,
  TEST_TYPES,
  TestQuestionWithArraAnswers,
  TestQuestionWithType,
} from "@/entities/course/course.types";
import { CreateQuestionDto } from "@/entities/lesson/lesson.types";
import Button from "@/shared/ui/Button";
import IconButton from "@/shared/ui/IconButton";
import Input from "@/shared/ui/Input";
import { useAppDispatch } from "@/store/store";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const translateTestType: Record<TEST_TYPES, string> = {
  multiple: "Несколько ответов",
  single: "С одним ответом",
};

export default function AddQuestionForm({
  onClose,
  oldData,
}: {
  onClose: () => void;
  oldData?: TestQuestionWithType;
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState<TEST_TYPES>(TEST_TYPES.single);
  const [answers, setAnswers] = useState<Record<string, AnswerType>>({});
  useEffect(() => {
    const loadData = () => {
      if (oldData) {
        setAnswers(oldData.answers);
        setName(oldData.question);
        setType(oldData.type);
      }
    };
    loadData();
  }, [oldData]);
  const handleSetIsCorrect = (checked: boolean, key: string) => {
    if (type === TEST_TYPES.single && checked) {
      const updated = Object.fromEntries(
        Object.entries(answers).map(([k, v]) => [
          k,
          { ...v, isCorrect: k === key ? true : false },
        ])
      );

      setAnswers(updated);
      return;
    }
    setAnswers((prev) => ({
      ...prev,
      [key]: { ...prev[key], isCorrect: checked },
    }));
  };
  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    if (name.length == 0) {
      toast.error("Укажите вопрос");
      return;
    }
    const arrAnswers = Object.values(answers);
    if (arrAnswers.length === 0) {
      toast.error("Укажите ответы");
      return;
    }
    const hasCorrect = arrAnswers.some((i) => i.isCorrect);
    if (!hasCorrect) {
      toast.error("Правильный ответ не указан");
      return;
    }
    const data: CreateQuestionDto = {
      question: name,
      answers: arrAnswers,
      type,
      orderIndex: 1,
    };
    if (!oldData) {
      const res = await dispatch(addQuestionThunk(data)).unwrap();
      if (res) {
        onClose();
      }
    } else {
      const res = await dispatch(
        updateQuestionThunk({ id: oldData.id, data })
      ).unwrap();
      if (res) {
        onClose();
      }
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-neutral-700">
        {oldData ? "Обновление вопроса" : "Новый вопрос"}
      </h1>
      <div className="flex flex-col gap-1 text-neutral-600">
        <label htmlFor="">Выберите тип вопроса</label>
        <select
          className="
    w-full
    rounded-lg
    border border-neutral-300
    bg-neutral-100
    text-neutral-700
    px-3 py-2
    focus:outline-none
    focus:ring-2 
    focus:ring-emerald-400 
    focus:border-emerald-400
    transition
    cursor-pointer
  "
          value={type}
          onChange={(e) => setType(e.target.value as TEST_TYPES)}
        >
          {Object.entries(TEST_TYPES).map(([Key, value]) => (
            <option key={Key} value={Key}>
              {translateTestType[value]}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Input
          label="Введите вопрос"
          placeholder="Сколько будет 2 + 2 ?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-neutral-700">
          Варианты ответов
        </h2>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[70%_20%_auto] px-1 pb-1 text-xs text-neutral-600 font-semibold uppercase">
            <span>Текст ответа</span>
            <span className="text-center">Правильный</span>
          </div>
          {Object.entries(answers).map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-[70%_20%_auto] gap-1 items-center"
            >
              <Input
                value={value.answer}
                placeholder="Ответ на вопрос"
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [key]: { ...value, answer: e.target.value },
                  })
                }
              />
              <Input
                type="checkbox"
                checked={value.isCorrect}
                onChange={(e) => handleSetIsCorrect(e.target.checked, key)}
              />
              <IconButton
                icon={
                  <Trash2 className="text-neutral-400 hover:text-red-500 transition-colors" />
                }
                aria-label="Удалить"
                onClick={() =>
                  setAnswers((prev) => {
                    const { [key]: _, ...rest } = prev;
                    return rest;
                  })
                }
              />
            </div>
          ))}
        </div>
        <div>
          <Button
            title="Добавить ответ"
            onClick={() => {
              const key = Date.now().toString();
              setAnswers({
                ...answers,
                [key]: { answer: "", isCorrect: false, orderIndex: 0 },
              });
            }}
            width="inline"
          />
        </div>
      </div>
      <div>
        <Button title="Сохранить" mode="darkgreen" onClick={handleSubmit} />
      </div>
    </div>
  );
}
