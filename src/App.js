import { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent';
import SearchBar from './SearchBar';
import LocalStorage from './LocalStorage';

export default function MyApp() {
  let onChange = (e) => {
  }
  return (
    <div className='container'>
      {/* <FormComponent/> */}
      {/* <SearchBar /> */}
      <LocalStorage/>
    </div>
  );
}

