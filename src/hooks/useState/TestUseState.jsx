import React, { useState } from "react";

function initialvalue() {
  console.log("Initial value");
  return 0;
}

const TestUseState = () => {
  const [count, setCount] = useState(initialvalue);

  return (
    <div className="flex justify-center rounded-[7.4px] border shadow-lg shadow-blue-200">
      <button
        className="btn"
        onClick={() => {
          setCount((preCount) => preCount + 1);
          setCount((preCount) => preCount + 1);
        }}
      >
        ADD <sup>+2</sup>
      </button>
      <h1 className="w-24 px-2 text-center text-5xl font-semibold text-blue-950">
        {count}
      </h1>
      <button className="btn" onClick={() => setCount(count - 1)}>
        SUB <sup>-1</sup>
      </button>
    </div>
  );
};

export default TestUseState;
