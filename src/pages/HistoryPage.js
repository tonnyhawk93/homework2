import React, {useState} from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';
import SetButton from '../components/SetButton/SetButton';
import Popup from '../components/Popup/Popup';
import Btn from '../components/Btn/Btn';
import TextField from '../components/TextField/TextField';


const HistoryPage = () => {

    let[numberToShow, setnumberToShow] = useState(9);
    let[Modal, setModal] = useState(false);
    let commits = [
        {
            status: 'ok',
            id: 1368,
            message: "add documentation for postgres scaler",
            branch: 'master',
            hash: '9c9f0b9',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'error',
            id: 1367,
            message: "Super cool UI kit for making websites that look like games",
            branch: 'super-cool-ui-kit',
            hash: '952e5567',
            autor: 'Vadim Makeev',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 1366,
            message: "Merge branch 'master' of github.com:jaywcjlove/awesome",
            branch: 'master',
            hash: 'b4636ab',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'pending',
            id: 1365,
            message: "upgrade typescript to 3.8",
            branch: 'master',
            hash: 'b4636ab',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 1364,
            message: "add documentation for postgres scaler",
            branch: 'master',
            hash: 'b4636ab',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'error',
            id: 1363,
            message: "replace all `div` to `article`",
            branch: 'master',
            hash: '952e5567`',
            autor: '952e5567',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 1362,
            message: "improved accessibility",
            branch: 'master',
            hash: 'e41e4cc',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 1350,
            message: "fix: upload 别片类型",
            branch: 'master',
            hash: 'e41e4cc',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 1349,
            message: "Form item has default height align with form size",
            branch: 'master',
            hash: 'e41e4cc',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 2368,
            message: "add documentation for postgres scaler",
            branch: 'master',
            hash: '9c9f0b9',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'error',
            id: 2367,
            message: "Super cool UI kit for making websites that look like games",
            branch: 'super-cool-ui-kit',
            hash: '952e5567',
            autor: 'Vadim Makeev',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 2366,
            message: "Merge branch 'master' of github.com:jaywcjlove/awesome",
            branch: 'master',
            hash: 'b4636ab',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'pending',
            id: 2365,
            message: "upgrade typescript to 3.8",
            branch: 'master',
            hash: 'b4636ab',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 2364,
            message: "add documentation for postgres scaler",
            branch: 'master',
            hash: 'b4636ab',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'error',
            id: 2363,
            message: "replace all `div` to `article`",
            branch: 'master',
            hash: '952e5567`',
            autor: '952e5567',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 2362,
            message: "improved accessibility",
            branch: 'master',
            hash: 'e41e4cc',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 2350,
            message: "fix: upload 别片类型",
            branch: 'master',
            hash: 'e41e4cc',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        },
        {
            status: 'ok',
            id: 2349,
            message: "Form item has default height align with form size",
            branch: 'master',
            hash: 'e41e4cc',
            autor: 'Philip Kirkorov',
            date: '21 янв, 03:06',
            time: '1 ч 20 мин'
        }
    ]
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
            <Header title = 'tonnyhawk93.github/main' path = {true}>
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
export default HistoryPage;


