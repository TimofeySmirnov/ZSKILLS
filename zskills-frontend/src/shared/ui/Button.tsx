import clsx from "clsx";
import React from "react";

type modes = "gray" | "green" | "transparent" | "darkgreen";
type widths = "full" | "inline";
type hoverEffectsType = "default" | "red";
type paddings = "def" | "small";

type ButtonProps = {
  onClick?: (e?: any) => void;
  title: string;
  mode?: modes;
  width?: widths;
  disabled?: boolean;
  hover?: hoverEffectsType;
  children?: React.ReactNode;
  paddings?: paddings;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonModes: Record<modes, string> = {
  gray: "bg-neutral-200 text-black rounded-xl opacity-100 hover:opacity-80 hover:cursor-pointer  duration-100",
  green:
    "bg-emerald-100 text-green-700 rounded-xl opacity-100 hover:opacity-80 hover:cursor-pointer  duration-100",
  transparent:
    "bg-transparent duration-200 border rounded-xl hover:cursor-pointer hover:bg-neutral-200/20 ",
  darkgreen:
    "bg-emerald-500 text-white rounded-xl opacity-100 hover:opacity-80 hover:cursor-pointer duration-100",
};

const buttonWidth: Record<widths, string> = {
  full: "w-full",
  inline: "inline-flex",
};

const hoverEffects: Record<hoverEffectsType, string> = {
  default: "",
  red: "hover:bg-red-600 hover:text-white hover:opacity-80 hover:cursor-pointer p-4 duration-100",
};

const paddingClasses: Record<paddings, string> = {
  def: "p-4",
  small: "px-2 py-1",
};

export default function Button(props: ButtonProps) {
  const {
    onClick,
    title,
    mode = "gray",
    width = "full",
    disabled = false,
    hover = "default",
    children,
    paddings = "def",
    ...rest
  } = props;
  const modeCls = buttonModes[mode];
  const sizeCls = buttonWidth[width];
  const hoverCls = hoverEffects[hover];
  const paddingCls = paddingClasses[paddings];
  const computedClassName = clsx(modeCls, sizeCls, hoverCls, paddingCls);
  return (
    <button
      disabled={disabled}
      className={computedClassName}
      onClick={onClick}
      {...rest}
    >
      {children ? children : title}
    </button>
  );
}
