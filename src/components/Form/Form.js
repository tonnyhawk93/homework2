import React, {useState} from 'react';
import './Form.css';
import WithBuildHistoryService from '../../hoc/WithBuildHistoryService';
import { useHistory } from "react-router-dom";
import Btn from '../Btn/Btn';
import TextField from '../TextField/TextField';
import TextFieldSmall from '../TextFieldSmall/TextFieldSmall';
       

const Form = () => {

  let history = useHistory();
  
  const loadData = () => {
    history.push('/history');
  }


  const[inputs, setInput] = useState(
    {
        repository: '',
        command: '',
        branch: '',
        synTime: ''
    })
  
  
  const isValide = () => {
    if(inputs.repository.length && inputs.command.length) return true;
    return false    
  }

  

  const submit = (e) => {
    e.preventDefault();
    loadData();
  }
  

  return (
    <div>
      <div className='Form_header '>
        <h2 className>Settings</h2>
        <h3>Configure repository connection and synchronization settings.</h3>
      </div>
      <form className = 'Form'>
        <div className='Form_fields'>
          <TextField label = 'GitHub repository' set = {setInput} inputs = {inputs} placeholder = 'user-name/repo-name' isImportant = {true} keyFor = 'repository' key = 'repository'/>
          <TextField label = 'Build command' set = {setInput} inputs = {inputs} placeholder = 'npm ci / npm run build' isImportant = {true} keyFor = 'command' key = 'command'/>
          <TextField label = 'Main branch' set = {setInput} inputs = {inputs} placeholder = 'master' keyFor = 'branch' key = 'branch'/>
        </div>
        <div className='Form_fieldsSmall'>
          <TextFieldSmall pre = 'Synchronize every' set = {setInput} inputs = {inputs} post = 'minutes' keyFor = 'synTime' key = 'synTime'/>
        </div>
        <div className='Form_buttonsGroup'>
          <Btn type = 'action' text = 'Save'  key = 'Save' fun = {submit}/> 
          <Btn type = 'control' text = 'Cancel'  key = 'Cancel' href = '/'/>
        </div>
      </form>
    </div>
  )
}


export default WithBuildHistoryService()(Form);


