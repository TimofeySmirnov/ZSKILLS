"use client";

import Button from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { useState } from "react";
import AddWebinarForm from "./AddWebinarForm";



export default function AddWebinarComponent({id} : {id: string}) {
  const [create, setCreate] = useState(false);
  return (
    <section className="flex flex-col gap-6 items-center">
      <h2 className="text-lg font-bold text-neutral-700">
        Данных о вебинаре нет
      </h2>
      <div>
        <Button
          width="inline"
          title="Добавить информацию"
          mode="darkgreen"
          onClick={() => setCreate(true)}
        />
      </div>
      {create && (
        <Modal onClose={() => setCreate(false)}>
          <AddWebinarForm id={id} onClose={() => setCreate(false)}/>
        </Modal>
      )}
    </section>
  );
}
