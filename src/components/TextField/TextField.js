import React, { useState } from 'react';
import './TextField.css'

const TextField = ({ label = '', isImportant = false, placeholder = '', keyFor, set, inputs}) => {

  const [input, setInput] = useState('');   
  let classBtn = "TextField_btn";
  let classLabel = '';
  if (input.length === 0) classBtn = 'invisible';
  if (isImportant) classLabel += 'important';
  if (label === '') classLabel += 'invisible';

  let change = (e) => {
    e.preventDefault();
    if(set && inputs) set({...inputs, [keyFor] : e.target.value});
    setInput(e.target.value)          
  }

  let del = (e) => {  
    e.preventDefault();
    if(set && inputs) set({...inputs, [keyFor] : ''});
    setInput('')          
  }

  return (
    <div className='TextField'>
      <label className={classLabel}>{label}</label>
      <div className ='input'>
        <input className = "input_big" placeholder={placeholder} value={input} onChange={change}/>
        <button tabIndex="-1" className={classBtn} onClick={del}>
          <i className="icon icon-clear" />
        </button>
      </div>
    </div>
  )
}
export default TextField;