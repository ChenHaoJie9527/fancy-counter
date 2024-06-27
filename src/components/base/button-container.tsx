import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function ButtonContainer({ children }: Props) {
  return (
    <div className="flex w-full min-h-[80px] items-center justify-center ">
      {children}
    </div>
  );
}
