import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';

const SettingsPage = () => { 
    const inputsText = [
        {
          label: 'GitHub repository',
          placeholder: 'user-name/repo-name',
          key: 'repository',
          isImportant: true
        },
        {
          label: 'Build command',
          placeholder: 'npm ci / npm run build',
          key: 'command',
          isImportant: true
        },
        {
          label: 'Main branch',
          placeholder: 'master',
          key: 'branch',
          isImportant: false
        }
      ]
      
    const inputsNum = [{
        pre: 'Synchronize every',
        post:'minutes',
        key: 'synchronize',
        isImportant: false
      }] 
      
    return (
        <>
            <Header title = 'School CI server'/>           
            <Container>   
                <Form inputsTextArr = {inputsText} inputsNumArr = {inputsNum}/>         
            </Container>  
            <Footer/>            
        </>     
    )
}


export default SettingsPage;



