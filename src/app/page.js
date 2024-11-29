"use client";
import Counter from "@/components/Counter/Counter";
import Stats from "@/components/Stats/Stats";
import { useSelector } from "react-redux";

export default function Home() {
  const counters = useSelector((state) => state.counters);

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
