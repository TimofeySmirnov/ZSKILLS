import clsx from "clsx";
import React from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
      onClick={onClose}
    >
      <div
        className={clsx(
          "relative bg-white rounded-2xl max-h-[95%] shadow-2xl p-6 w-[90%] max-w-md border border-white/10 overflow-auto"
        )}
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  );
}
