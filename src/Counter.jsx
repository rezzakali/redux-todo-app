import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
