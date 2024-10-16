'use client';
import {useState} from 'react';
export default function MyButton() {
    const[count,setCount]=useState(0);
    function handleClick() {
        setCount(count+1);
        alert(count);
    }
  
    return (
      
      <button onClick={handleClick}>
        {count}
      </button>

    );
  }