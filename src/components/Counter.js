import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>
        Incremnent
      </button>
      <br />
      <br />

      <div>Initial value--&gt; {count}</div>

      <br />
      <br />
      <button onClick={()=>dispatch(decrement())}>
        Decremnent
      </button>
    </div>
  )
}

export default Counter
