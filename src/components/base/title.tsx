import React from "react";

interface Props {
  name: string;
  children?: React.ReactNode;
}
export default function Title({ name, children }: Props) {
  return (
    <h1 className=" font-mono text-2xl not-italic font-medium tracking-[2px]">
      {children ? children : name}
    </h1>
  );
}
