"use client";

import { WebinarType } from "@/entities/lesson/lesson.types";
import IconButton from "@/shared/ui/IconButton";
import Modal from "@/shared/ui/Modal";
import { Pencil } from "lucide-react";
import { useState } from "react";
import AddWebinarForm from "./AddWebinarForm";

export default function WebinarInfoComponent({
  webinar,
}: {
  webinar: WebinarType;
}) {
  const [update, setUpdate] = useState(false);
  return (
    <section className="flex flex-col gap-4 w-4/5">
      <h2 className="text-lg font-bold text-neutral-700 text-center">
        Информация о вебинаре
      </h2>
      <div className="grid grid-cols-[80%_auto] gap-2">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center text-lg gap-2 text-neutral-600 ">
            <span className=" font-semibold ">Ссылка на подключение:</span>
            <p>{webinar.link}</p>
          </div>
          <div className="flex items-center text-lg gap-2 text-neutral-600 ">
            <span className=" font-semibold ">Время подключение:</span>
            <p>{webinar.connectTime}</p>
          </div>
          {webinar.description && (
            <div className="flex flex-col  gap-2 text-neutral-600 ">
              <span className="text-lg font-semibold">Описание вебинара:</span>
              <p>{webinar.description}</p>
            </div>
          )}
        </div>
        <div>
          <IconButton
            icon={
              <Pencil className="text-neutral-400 hover:text-emerald-400" />
            }
            onClick={() => setUpdate(true)}
          />
        </div>
      </div>
      {update && (
        <Modal onClose={() => setUpdate(false)}>
          <AddWebinarForm
            onClose={() => setUpdate(false)}
            id=""
            oldData={webinar}
          />
        </Modal>
      )}
    </section>
  );
}
