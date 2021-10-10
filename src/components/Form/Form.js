import React, {useState} from 'react';
import './Form.css';
import { connect } from 'react-redux';
import WithBuildHistoryService from '../../hoc/WithBuildHistoryService';
import { downloadBegin, downloadEnd, formError, formSubmited, hideError} from '../../store/actions';
import { useHistory } from "react-router-dom";
import Btn from '../Btn/Btn';
import TextField from '../TextField/TextField';
import TextFieldSmall from '../TextFieldSmall/TextFieldSmall';
       

const Form = ({error, BuildHistoryService, downloadBegin, downloadEnd, formError, formSubmited, hideError}) => {

  let history = useHistory();
  
  const loadData = () => {
      downloadBegin();
      BuildHistoryService.getData().then(data => {
        downloadEnd(data);
        history.push('/');
      })
      .catch(err => {
        formError();
        downloadEnd([])
      });
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

  const showError = (e) => {
    e.preventDefault();
    formError();
  }

  const submit = (e) => {
    e.preventDefault();
    formSubmited(inputs);
    loadData();
  }
  

  return (
    <div>
      <div className='Form_header '>
        <h2 className = {error ? 'Form_error' : ''}>Settings</h2>
        <h3>Configure repository connection and synchronization settings.</h3>
      </div>
      <form className = 'Form' onChange = {hideError}>
        <div className='Form_fields'>
          <TextField label = 'GitHub repository' set = {setInput} inputs = {inputs} placeholder = 'user-name/repo-name' isImportant = {true} keyFor = 'repository' key = 'repository'/>
          <TextField label = 'Build command' set = {setInput} inputs = {inputs} placeholder = 'npm ci / npm run build' isImportant = {true} keyFor = 'command' key = 'command'/>
          <TextField label = 'Main branch' set = {setInput} inputs = {inputs} placeholder = 'master' keyFor = 'branch' key = 'branch'/>
        </div>
        <div className='Form_fieldsSmall'>
          <TextFieldSmall pre = 'Synchronize every' set = {setInput} inputs = {inputs} post = 'minutes' keyFor = 'synTime' key = 'synTime'/>
        </div>
        <div className='Form_buttonsGroup'>
          <Btn type = 'action' text = 'Save'  key = 'Save' fun = {isValide() ? submit : showError}/> 
          <Btn type = 'control' text = 'Cancel'  key = 'Cancel' href = '/'/>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    downloadBegin: () => dispatch(downloadBegin()),
    downloadEnd: (data) => dispatch(downloadEnd(data)),
    formError: () => dispatch(formError()),
    formSubmited: (inputs) => dispatch(formSubmited(inputs)),
    hideError: () => dispatch(hideError())
  }
}

export default WithBuildHistoryService()(connect(mapStateToProps, mapDispatchToProps)(Form));


