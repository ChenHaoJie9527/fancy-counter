import React, { useRef } from "react";
import Title from "./base/title";
import Counter, { CRef } from "./base/counter";
import Button from "./base/button";

export default function Card() {
  const counterRef = useRef<CRef>(null);
  return (
    <div className="w-[400px] h-[400px] flex flex-col items-center rounded-md bg-[#bff227]">
      <div className="w-full h-full flex flex-col items-center p-8">
        <Title name="Fancy Counter" />
        <Counter ref={counterRef} />
        <Button
          key="reset"
          callback={() => {
            counterRef.current?.reset();
          }}
          className=" cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7f7a7a"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-undo-2 svg-reset"
          >
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
        </Button>
      </div>
      <div className="flex w-full min-h-[80px] items-center justify-center ">
        <Button
          key="increment"
          callback={() => {
            counterRef?.current?.increment();
          }}
          className="flex-1 flex items-center justify-center cursor-pointer bg-[#1d2405] h-full text-[#bff227] rounded-bl-md text-3xl  hover:bg-[#f2a933]"
        >
          +
        </Button>
        <Button
          key="decrement"
          callback={() => {
            counterRef?.current?.decrement();
          }}
          className="flex-1 flex items-center justify-center cursor-pointer bg-[#1d2405] h-full text-[#bff227] rounded-br-md text-3xl hover:bg-[#f2a933]"
        >
          -
        </Button>
      </div>
    </div>
  );
}
