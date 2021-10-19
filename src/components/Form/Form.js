import React, { useState, useEffect, useRef} from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import WithBuildHistoryService from '../../hoc/WithBuildHistoryService';
import * as actions from '../../store/actions';
import { useHistory } from "react-router-dom";
import Btn from '../Btn/Btn';
import TextField from '../TextField/TextField';
import TextFieldSmall from '../TextFieldSmall/TextFieldSmall';


const Form = ({ BuildHistoryService, inputsTextArr, inputsNumArr }) => {
  const dispatch = useDispatch();
  const { downloadBegin, downloadEnd, formSubmited } = bindActionCreators({ ...actions }, dispatch);
  let history = useHistory();

  const [isFormError, setFormError] = useState(false);
  const inputs = useRef({});

  const set = (name, content)  => {
    if(isFormError) setFormError(false);
    inputs.current[name] = content;
}
  useEffect(() => {
    let fields = {}
    inputsTextArr.forEach(input => {fields[input.key] = {content: '', isImportant: input.isImportant}});
    inputsNumArr.forEach(input => {fields[input.key] = {content: '', isImportant: input.isImportant}});
    inputs.current = fields;
  }, [inputsTextArr, inputsNumArr])

  const isValide = (inputs) => {
    for(let value of Object.values(inputs)) {
      if(value.isImportant && value.content === '') return false
    }
    return true;
  }

  const loadData = () => {
    downloadBegin();
    BuildHistoryService.getData().then(data => {
      downloadEnd(data);
      history.push('/');
    })
  }
 
  const submitForm = (e) => {
    e.preventDefault();
    if (isValide(inputs.current)) {
      formSubmited(inputs.current.repository.content);
      loadData();
    } else {
      setFormError(true);
    }
  }

  return (
    <div>
      <div className='Form_header '>
        <h2 className={isFormError ? 'Form_error' : ''}>Settings</h2>
        <h3>Configure repository connection and synchronization settings.</h3>
      </div>
      <form className='Form' onSubmit={submitForm} >
        <div className='Form_fields'>

          {inputsTextArr.map(input => {
            return (
              <TextField
                label={input.label}
                keyFor={input.key}
                key={input.key}
                placeholder={input.placeholder}
                set = {set}
                isImportant={input.isImportant}
              />)
          })}
        </div>
        <div className='Form_fieldsSmall'>
          {inputsNumArr.map(input => {
            return (
              <TextFieldSmall
                pre={input.pre}
                post={input.post}
                keyFor={input.key}
                key={input.key}
                set = {set}
              />)
          })}
        </div>
        <div className='Form_buttonsGroup'>
          <Btn type='action' text='Save' key='Save' />
          <Btn type='control' text='Cancel' key='Cancel' href='/' />
        </div>
      </form>
    </div>
  )
}

export default WithBuildHistoryService()(Form);


