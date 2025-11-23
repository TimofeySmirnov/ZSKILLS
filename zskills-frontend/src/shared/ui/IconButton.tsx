import React, { ButtonHTMLAttributes } from "react";

type IconButtonProps = {
  icon: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton(props: IconButtonProps) {
  const { icon, className, ...rest } = props;
  return (
    <button className={`hover:cursor-pointer ${className}`} {...rest}>
      {icon}
    </button>
  );
}
