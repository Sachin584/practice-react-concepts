import React, { useEffect } from 'react'
import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({user}) {
  let values = user;
  let [input, setInput] = useState("");
  let [res, setRes] = useState([]);

  useEffect(()=>{
    if(input){
        let result = values.filter((val)=>{
          console.log(val.name.first)
          return (val.name.first).toLocaleLowerCase().startsWith(input)
        });
        setRes(result);
    }
    return ()=>{
        setRes([])
    }
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
            <li key={key} value={val} onClick={handleValue}>{val.name.first}</li>
        ))}
        </ul>
    </div>
  )
}
