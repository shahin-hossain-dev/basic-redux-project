"use client";
import React, { useState } from "react";
import Count from "../Count/Count";
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const increment = count + 1;
    setCount(increment);
  };

  const handleDecrement = () => {
    const decrement = count - 1;
    setCount(decrement);
  };

  return (
    <div className="py-5 px-10 flex flex-col items-center space-y-5 bg-white shadow rounded">
      <h2 className="font-medium text-xl">Simple Counter Application</h2>
      <Count count={count} />
      <div className="flex gap-6">
        <Button handler={handleIncrement}>Increment</Button>
        <Button handler={handleDecrement} type={"danger"}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
