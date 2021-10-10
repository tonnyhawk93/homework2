import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Settings from '../components/Settings/Settings';
import SetButton from '../components/SetButton/SetButton';


const StartPage = ({error, hideError}) => {
    if(error) hideError();
    return (
        <>
            <Header title = 'School CI server'>
                <SetButton type = 'settings' text = 'Settings' href = './settings'/> 
            </Header>           
            <Container>                     
                <Settings/>                                                                   
            </Container>                 
            <Footer/>                           
        </>     
    )
}

export default StartPage;






