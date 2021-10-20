import React from 'react';
import './Settings.css'
import Btn from '../Btn/Btn';
import SvgLogo from '../../img/logo.svg';
import {ReactSVG} from 'react-svg';

const Header = () => {  
  return (
    <div className = 'Settings'>
        <ReactSVG src={SvgLogo} />
        <div>Configure repository connection and synchronization settings</div>
        <Btn type = 'action' text = 'Open settings' href = './settings'/>        
    </div>  
  )
}

export default Header;