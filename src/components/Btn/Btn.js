import React from 'react';
import './Btn.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Btn = ({text, type, href, loading, fun}) => {    
    const classes = loading ? 'Btn disabled' : 'Btn ' + type;
    let content =  href ? 
      <Link to = {href}><button className={classes}>{text}</button></Link> :
      <button className={classes} onClick = {fun}>{text}</button>

      if(loading) {
        content = <button className={classes} onClick = {e => e.preventDefault()}>{text}</button>  
      }
      
  return content;
}

const mapStateToProps = ({loading}) => {
  return {loading};
}


export default connect(mapStateToProps)(Btn);