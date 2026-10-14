"use client";
import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <button onClick = {() => setCounter((prev)=>(prev+1))}>Counter {counter} </button>
  )
}

export default Counter