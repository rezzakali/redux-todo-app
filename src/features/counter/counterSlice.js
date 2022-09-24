import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  todos: [],
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const newItem = state.todos.filter((item, index) => {
        return index !== action.payload;
      });
      state.todos = newItem;
    },
  },
});

export const { increment, decrement, addTodo, deleteTodo } =
  counterSlice.actions;

export default counterSlice.reducer;
