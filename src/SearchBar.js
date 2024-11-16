import React, { useEffect } from 'react'
import { useState } from 'react';

export default function SearchBar() {
  let values = ['sachin', 'chotu','ch','cha'];
  let [input, setInput] = useState("");
  let [res, setRes] = useState([]);

  useEffect(()=>{
    if(input){
        let result = values.filter((val)=>val.startsWith(input));
        setRes(result);
    }
    return ()=>{
        setRes([])
    }
    //console.log();
  },[input])

  let handleChange = (e)=>{
    setInput(e.target.value)
  }

  let handleValue = (e)=>{
    console.log(e.target.textContent+"calling") 
    setInput(e.target.textContent);
  }
  return (
    <div>
        <input value= {input} onChange={handleChange}/>
        <ul>
        {res.map((val,key)=>(
            <li key={key} value={val} onClick={handleValue}>{val}</li>
        ))}
        </ul>
    </div>
  )
}
