import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextareaProps = {
  label?: string;
  error?: FieldError;

  /** React Hook Form registration (опционально) */
  registration?: UseFormRegisterReturn;

  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea(props: TextareaProps) {
  const {
    label,
    error,
    placeholder,
    registration,
    value,
    onChange,
    className = "",
    ...rest
  } = props;

  return (
    <div className="flex flex-col gap-2 w-full text-neutral-500">
      {label && <label>{label}</label>}

      <textarea
        placeholder={placeholder}
        {...(registration ?? {})} // если RHF — используем его
        {...(value !== undefined ? { value, onChange } : {})} // иначе — обычный контрол
        className={`rounded-md py-2 px-4 w-full bg-neutral-100 placeholder:font-medium 
          resize-none min-h-[100px] border border-transparent
          focus:border-neutral-500
          user-invalid:border user-invalid:border-red-700 user-invalid:text-red-700
          ${error ? "border border-red-700 text-red-700" : ""}
          ${className}
        `}
        {...rest}
      />

      {error && <span className="text-red-700 text-xs">{error.message}</span>}
    </div>
  );
}
