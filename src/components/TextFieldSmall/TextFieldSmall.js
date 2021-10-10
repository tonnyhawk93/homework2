import React, { useState } from 'react';
import './TextFieldSmall.css'

const TextFieldSmall = ({pre, post, inputs, set, keyFor}) => { 
  const [input, setInput] = useState(''); 

  const isNum = (e) => {
    return !isNaN(e.target.value) && e.target.value !== 'e'
  }


  oninput = (e) => {
    if(isNum(e)) {
      set({...inputs, [keyFor] : e.target.value})
      setInput(e.target.value)
    }    
  }
  return (
    <div className = 'TextFieldSmall_container'>
        <label>{pre}</label>
        <input className = 'TextFieldSmall' value = {input} onInput = {oninput}></input>
        <label>{post}</label>  
    </div> 
  )
}

export default TextFieldSmall;