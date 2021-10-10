import React, {useState} from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';
import SetButton from '../components/SetButton/SetButton';
import {connect} from 'react-redux';
import Popup from '../components/Popup/Popup';
import Btn from '../components/Btn/Btn';
import TextField from '../components/TextField/TextField';
import {hideError} from '../store/actions';


const HistoryPage = ({commits, repository, error, hideError}) => {
    if(error) hideError();
    let[numberToShow, setnumberToShow] = useState(9);
    let[Modal, setModal] = useState(false);
    let Cards = commits.map(data => <Card data = {data} key = {data.id}/>);

    function show(num, item) {
        return item.filter((el, i) => i < num )
    }
    const showMore = () => {
        setnumberToShow(numberToShow + 9)
    }
    const showModal = () => {
        setModal(true)
    }
    const hideModal = () => {
        setModal(false)
    }
    
    const html = document.querySelector('html');    
    html.style["overflow-y"] = Modal ? 'hidden' : 'auto';    
    return (        
        <>
            <Header title = {repository} path = {true}>
                <SetButton type = 'run' text = 'Run build' fun = {showModal}/>  
                <SetButton type = 'settings' href ='/settings'/> 
            </Header>           
            <Container>                     
                {show(numberToShow, Cards)} 
                {numberToShow >= Cards.length ? null : <SetButton text = 'Show more' fun = {showMore}/>}                                                                                
            </Container>                 
            <Footer/> 
            {Modal && <Popup 
                header = 'New build' 
                descr = 'Enter the commit hash which you want to build.'
                fields = {<TextField placeholder = 'Commit hash'/>}
                buttons = {[<Btn fun = {hideModal} type = 'action' text = 'Run build' key = 'action'/>, <Btn fun = {hideModal} type = 'control' text = 'Cancel' key = 'control'/>]}
            />}            
        </>     
    )
}

const mapStateToProps = ({commits, repository, error}) => {
    return {commits, repository, error};
  }
const mapDispatchToProps = (dispatch) => {
    return {
      hideError: () => dispatch(hideError())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);


