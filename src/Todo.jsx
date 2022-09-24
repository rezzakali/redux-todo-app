import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './features/counter/counterSlice';

function Todo() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const handleTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };
  const handleClick = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="button" onClick={handleTodo}>
        Add
      </button>
      <hr />
      {todos &&
        todos.map((item, id) => (
          <ul
            key={id}
            style={{
              border: '1px solid gray',
              display: 'flex',
              margin: '10px',
            }}
          >
            <li>{item}</li>
            <button
              type="button"
              onClick={() => {
                handleClick(id);
              }}
            >
              Delete
            </button>
          </ul>
        ))}
    </div>
  );
}

export default Todo;
