import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementbyAmount } from './counterSlice'
import { useState } from 'react';


function Counter() {

const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();
const [amount,setAmount] =  useState(0);
const addValue = Number(amount) || 0
  return (
    <div>
        <p>
            {count}
        </p>
        <button onClick={() =>{dispatch(increment())}}>
                +1
        </button>
        <button onClick={() =>{dispatch(decrement())}}>
                -1
        </button>
        <button onClick={() =>{dispatch(reset())}}>
                reset
        </button>
        <input
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        type='number'
        >
        </input>
        <button onClick={() =>{dispatch(incrementbyAmount(addValue))}}>
                increase by amount
        </button>
        
    </div>
  )
}

export default Counter