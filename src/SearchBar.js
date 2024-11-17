import React, { useEffect } from 'react'
import { useState } from 'react';
import './SearchBar.css';
import { useUsers } from './UserContext';
 
export default function SearchBar() {
  let {users} = useUsers();
  let [input, setInput] = useState("");
  let [res, setRes] = useState([]);
  
  useEffect(()=>{
    if(input){
        let result = users.filter((val)=>{
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
    setInput(e.target.value);
    console.log(users)
  }

  let handleValue = (e)=>{
    
    setInput(e.target.textContent);
  }
  return (
    <div className='searchbar'>
        <input  value= {input} onChange={handleChange}/>
        <ul>
        {res.map((val,key)=>(
            <li key={key} value={val} onClick={handleValue}>{val.name.first}</li>
        ))}
        </ul>
    </div>
  )
}
