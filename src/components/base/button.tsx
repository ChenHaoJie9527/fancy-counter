import React from "react";

interface Props {
  children?: React.ReactNode;
  callback?: () => void;
  key?: string;
  className?: string;
}
export default function Button({ children, callback, key, className }: Props) {
  return (
    <div
      key={key}
      className={`${className}`}
      onClick={callback}
    >
      {children}
    </div>
  );
}
