"use client";
import Counter from "@/components/Counter/Counter";
import Stats from "@/components/Stats/Stats";
import Image from "next/image";
import { useState } from "react";

const initialCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];
export default function Home() {
  const [counters, setCounters] = useState(initialCounters);

  const counterIncrement = (counterId) => {};
  const counterDecrement = (counterId) => {};

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {counters.map((counter) => (
          <Counter key={counter.id} />
        ))}
        <Stats totalCount={10} />
      </main>
    </div>
  );
}
