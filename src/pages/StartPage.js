import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Settings from '../components/Settings/Settings';
import SetButton from '../components/SetButton/SetButton';
import {connect} from 'react-redux';
import {hideError} from '../store/actions';


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

const mapStateToProps = ({error}) => {
    return {error};
  }
const mapDispatchToProps = (dispatch) => {
    return {
      hideError: () => dispatch(hideError())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(StartPage);






