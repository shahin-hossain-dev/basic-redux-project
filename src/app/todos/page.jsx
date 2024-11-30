"use client";
import { fetchTodos } from "@/lib/features/todos/todosSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = fetchTodos();
    dispatch(todos);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      {todos?.map((todo) => (
        <div
          key={todo.id}
          style={{
            padding: "0px 20px 0px 20px",
          }}
        >
          {" "}
          <Link href={`/todo-details/${todo.id}`}>
            {todo.id}. {todo.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Todos;
