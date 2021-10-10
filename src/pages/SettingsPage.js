import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';


const SettingsPage = () => { 
    return (
        <>
            <Header title = 'School CI server'/>           
            <Container>   
                <Form/>         
            </Container>  
            <Footer/>            
        </>     
    )
}


export default SettingsPage;



