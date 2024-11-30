import { createSlice } from "@reduxjs/toolkit";
import { fetchTodoById, fetchTodos } from "./todosAPI";

const initialState = {
  todos: [],
  loading: false,
  error: null,

  todoForId: {},
  loadingForId: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all todos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //fetch todos by id
      .addCase(fetchTodoById.pending, (state) => {
        state.loadingForId = true;
        state.error = null;
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.loadingForId = false;
        state.todoForId = action.payload;
      })
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.loadingForId = false;
        state.error = action.payload.message;
      });
  },
});

export default todosSlice.reducer;

export const { allTodos } = todosSlice.actions;
