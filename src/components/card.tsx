import React, { useRef } from "react";
import Title from "./base/title";
import Counter, { CRef } from "./base/counter";
import Button from "./base/button";
import Reset from "./svgs/reset.svg?react";

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
          <Reset />
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
