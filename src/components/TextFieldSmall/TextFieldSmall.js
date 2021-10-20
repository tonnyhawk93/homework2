import React, { useRef } from 'react';
import './TextFieldSmall.css'

const TextFieldSmall = ({pre, post, isImportant = false, set, keyFor}) => {
  
  const inputRef = useRef('');
  
  const isNum = (value) => {
    return !isNaN(value) && value !== 'e'
  }

  const onInput = (e) => {
    e.preventDefault()
    if(isNum(e.target.value)) {
      inputRef.current.value = e.target.value;
      set(keyFor, {content: inputRef.current, isImportant}); 
    }else {
      inputRef.current.value = inputRef.current.value.slice(0, -1);
    }
  }
  return (
    <div className = 'TextFieldSmall_container'>
        <label>{pre}</label>
        <input className = 'TextFieldSmall' ref={inputRef} onInput = {onInput}/>
        <label>{post}</label>  
    </div> 
  )
}

export default TextFieldSmall;