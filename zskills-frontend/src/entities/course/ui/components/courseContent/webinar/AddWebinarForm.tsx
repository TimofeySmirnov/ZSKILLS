"use client";

import {
  createWebinarInfo,
  updateWebinarInfo,
} from "@/entities/course-webinar/models/course-webinar.slice";
import { WebinarType } from "@/entities/lesson/lesson.types";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import { useAppDispatch } from "@/store/store";
import { useState } from "react";

type AddWebinarFormProps = {
  id: string;
  onClose: () => void;
  oldData?: WebinarType;
};

export default function AddWebinarForm({
  id,
  onClose,
  oldData,
}: AddWebinarFormProps) {
  const [link, setLink] = useState(oldData?.link || "");
  const [connectTime, setConnectTime] = useState(oldData?.connectTime || "");
  const [description, setDescription] = useState(oldData?.description || "");
  const dispatch = useAppDispatch();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { link, connectTime, description };
    if (!oldData) {
      const res = await dispatch(createWebinarInfo({ id, data })).unwrap();
      if (res) {
        onClose();
      }
    } else {
      const res = await dispatch(
        updateWebinarInfo({ id: oldData.id, data })
      ).unwrap();
      if (res) {
        onClose();
      }
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-neutral-700">
        {oldData ? "Обновление вебинара" : "Создание вебинара"}
      </h1>
      <div className="flex flex-col gap-2">
        <Input
          label="Ссылка на подключение"
          placeholder="Укажите ссылку на подключение"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Input
          label="Дата и время подключения"
          placeholder="10 сентября, 12:00"
          value={connectTime}
          onChange={(e) => setConnectTime(e.target.value)}
        />
        <Textarea
          label="Описание вебинара (необязательно)"
          placeholder="Что будет в вебинаре, что подготовить к нему..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <Button title="Сохранить" mode="darkgreen" onClick={handleClick} />
      </div>
    </form>
  );
}
