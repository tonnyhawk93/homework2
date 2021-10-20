import React from 'react';
import './SetButton.css';
import {Link} from 'react-router-dom';

const SetButton = ({text, type, href, fun}) => { 
    let iconClass = 'icon';
    let btnClass = 'SetButton';
    let textSpan = null;
    if(text) textSpan = <span> {text}</span>

    if(type === 'run') {
        iconClass += ' icon-play';
    }else if (type === 'settings') {
        iconClass += ' icon-cog'     
    }

    if(text) btnClass += " big"
    else btnClass += " small"

    let content = href ? 
      <Link className= {btnClass} to = {href}><button className= {btnClass}><i className = {iconClass}></i>{textSpan}</button></Link> :
      <button className= {btnClass} onClick = {fun} ><i className = {iconClass}></i>{textSpan}</button>

  return content;
}

export default SetButton;



