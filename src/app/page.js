"use client";
import Counter from "@/components/Counter/Counter";
import Stats from "@/components/Stats/Stats";
import { decrement, increment } from "@/lib/features/counters/countersSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (incrementId) => {
    dispatch(increment(incrementId));
  };

  const handleDecrement = (decrementId) => {
    dispatch(decrement(decrementId));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <nav>
          <Link href={"/todos"} style={{ color: "blue" }}>
            Todos
          </Link>
        </nav>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
        <Stats totalCount={10} />
      </main>
    </div>
  );
}
