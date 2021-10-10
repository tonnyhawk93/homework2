import React from 'react';
import './Btn.css';
import {Link} from 'react-router-dom';


const Btn = ({text, type, href, fun}) => {    
    const classes = 'Btn ' + type;
    let content =  href ? 
      <Link to = {href}><button className={classes}>{text}</button></Link> :
      <button className={classes} onClick = {fun}>{text}</button>
  return content;
}


export default Btn;