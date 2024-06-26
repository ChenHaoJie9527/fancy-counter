import React, { Ref, forwardRef, useImperativeHandle, useState } from "react";

export type CRef = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
type Props = {
  count?: number;
};
function Counter(props: Props, ref: Ref<CRef>) {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    increment() {
      if (count >= 5) {
        return;
      }
      setCount(count + 1);
    },
    decrement() {
      if (count <= 0) {
        return;
      }
      setCount(count - 1);
    },
    reset() {
      setCount(0);
    },
  }));

  return <div className="text-9xl my-[24px]">{count}</div>;
}
export default forwardRef(Counter);
