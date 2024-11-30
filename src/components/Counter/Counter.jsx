"use client";
import React, { useState } from "react";
import Count from "../Count/Count";
import Button from "../Button/Button";

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div className="py-5 px-10 flex flex-col items-center space-y-5 bg-white shadow rounded">
      <h2 className="font-medium text-xl">Simple Counter Application</h2>
      <Count count={count.value} />
      <div className="flex gap-6">
        <Button handler={() => handleIncrement(count.id)}>Increment</Button>
        <Button handler={() => handleDecrement(count.id)} type={"danger"}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
