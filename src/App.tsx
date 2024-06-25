import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <main className="w-[400px] h-[400px] flex flex-col items-center rounded-md bg-[#bff227]">
      <div className="w-full h-full flex flex-col items-center p-8">
        <h1 className=" font-mono text-2xl not-italic font-medium tracking-[2px]">
          Fancy Counter
        </h1>
        <p className="text-9xl my-[24px]">{count}</p>
        <button>
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
            className="lucide lucide-undo-2"
          >
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
        </button>
      </div>
      <div className="flex w-full min-h-[80px] items-center justify-center ">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="flex-1 bg-[#1d2405] h-full text-[#bff227] rounded-bl-md text-3xl  hover:bg-[#f2a933]"
        >
          +
        </button>
        <button
          onClick={() => {
            if (count <= 0) {
              return;
            }
            setCount(count - 1);
          }}
          className="flex-1 bg-[#1d2405] h-full text-[#bff227] rounded-br-md text-3xl hover:bg-[#f2a933]"
        >
          -
        </button>
      </div>
    </main>
  );
}

export default App;
