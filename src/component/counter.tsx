import {useState} from 'react';
import s from './counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div >
      {count}
      <button className={s.button} onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
