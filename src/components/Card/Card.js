import React from 'react';
import './Card.css';


const Card = ({data}) => {
    const {status, id, message, branch, hash, autor, date, time} = data;

    let statusClass = 'Card_id ';
    let iconClass = 'icon '

    if(status === 'ok') {
        statusClass += 'ok'
        iconClass += 'icon-ok'
    }else if(status === 'error'){
        statusClass += 'error'
        iconClass += 'icon-error'
    }else{
        statusClass += 'pending'
        iconClass += 'icon-pending'
    }
    
    return (
    <div className = 'Card'>   
        <div className = 'Card_icon'>
            <i className = {iconClass}></i>    
        </div>
        <div className = 'Card_right'>
            <div className = 'Card_header'>              
                <span className = 'Card_message'>
                    <span className = {statusClass}>#{id} </span>
                    {message}
                </span>   
            </div>
            <div className = 'Card_footer'>
                <div className = 'Card_commit'>       
                    <i className = 'icon icon-code-commit'></i>              
                    <span>   {branch}<span className = 'Card_hash'> {hash}</span> </span>   
                </div> 
                <div className = 'Card_autor'>  
                    <i className = 'icon icon-user'></i>                     
                    <span>{autor}</span> 
                </div> 
            </div>
        </div>
        <div className = 'Card_left'>
            <div className = 'Card_date'>                
                <span><i className = 'icon icon-calendar'></i> {date}</span>  
            </div>
            <div className = 'Card_time'>                
                <span><i className = 'icon icon-clock'></i> {time}</span>  
            </div>
        </div>        
    </div>   
    )
}

export default Card;