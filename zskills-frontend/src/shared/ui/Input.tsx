"use client";

import React from "react";
import { Check } from "lucide-react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label?: string;
  error?: FieldError;
  registration?: UseFormRegisterReturn;
  labelClassName?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref">;

export default function Input(props: InputProps) {
  const {
    label,
    error,
    registration,
    disabled = false,
    type = "text",
    id,
    labelClassName = "",
    className = "",
    ...rest
  } = props;

  /** ============= ЧЕКБОКС ============= */
  if (type === "checkbox") {
    return (
      <div className="flex items-center justify-center gap-2">
        {/* checkbox wrapper */}
        <label
          className={`relative inline-flex items-center ${
            disabled ? "" : "cursor-pointer"
          }`}
        >
          <input
            id={id}
            type="checkbox"
            className="peer sr-only"
            disabled={disabled}
            {...(registration ?? {})}
            {...rest}
          />

          {/* box */}
          <div
            className={`
              w-5 h-5 lg:w-6 lg:h-6 rounded-md border border-neutral-500 
              flex items-center justify-center transition-all
              peer-checked:border-emerald-400
              ${disabled ? "opacity-50" : ""}
            `}
          />

          {/* check icon */}
          <Check
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-4 h-4 text-emerald-400 opacity-0 scale-75
              transition-all duration-200
              peer-checked:opacity-100 peer-checked:scale-100
            "
          />
        </label>

        {/* label for checkbox */}
        {label && (
          <label
            htmlFor={id}
            className={`text-neutral-600 select-none ${
              disabled ? "text-neutral-400" : "cursor-pointer"
            } ${labelClassName}`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }

  /** ============= Обычный INPUT ============= */

  return (
    <div className="flex flex-col gap-1 w-full text-neutral-600">
      {label && (
        <label
          
        >
          {label}
        </label>
      )}

      <input
        type={type}
        disabled={disabled}
        className={`
          rounded-md py-2 px-4 w-full bg-neutral-100 
          placeholder:text-neutral-400 placeholder:font-medium
          border border-transparent 
          focus:border-neutral-500 outline-none
          user-invalid:border-red-600 user-invalid:text-red-600
          ${error ? "border-red-600 text-red-600" : ""}
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
          ${className}
        `}
        {...(registration ?? {})}
        {...rest}
      />

      {error && (
        <span className="text-red-600 text-xs px-1">{error.message}</span>
      )}
    </div>
  );
}
