"use client";
import { fetchTodoById } from "@/lib/features/todos/todosSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const { id } = useParams();
  const { todoForId, loadingForId, error } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoById(id));
  }, [dispatch, id]);

  if (loadingForId) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{todoForId?.id}</h2>
      <h2>{todoForId?.title}</h2>
    </div>
  );
};

export default Todo;
