import React, { useState, useRef } from 'react';
import './TextField.css'

const TextField = ({ label, isImportant, placeholder, keyFor, set }) => {

  const [isButtonVisible, setButtonVisible] = useState(false)
  const inputRef = useRef(null);

  const clearInput = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
    setButtonVisible(false);
    if(set) set(keyFor, { content: inputRef.current.value, isImportant})
  }

  const omContentInput = () => {
    if (!isButtonVisible) setButtonVisible(true);
    if(inputRef.current.value === '') setButtonVisible(false)
    if(set) set(keyFor, { content: inputRef.current.value, isImportant})
  }

  return (
    <div className='TextField'>
      {!!label && <label className={isImportant ? 'important' : ''}>{label}</label>}
      <div className='input'>
        <input className="input_big" placeholder={placeholder} ref={inputRef} onChange={omContentInput} />
        {
          isButtonVisible &&
          <button tabIndex="-1" className="TextField_btn" onClick={clearInput}>
            <i className="icon icon-clear" />
          </button>
        }
      </div>
    </div>
  )
}
export default TextField;