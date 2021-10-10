import React from 'react';
import './Header.css'

const Header = ({title, path = false, children}) => { 
  let headerClass = 'Header_logo';
  if(path) headerClass = 'Header_path';
  return (
    <header>
      <div className = 'Header_container'>
        <h1 className = {headerClass}>{title}</h1>
        <div className = 'Header_btnGroop'>
          {children}
        </div>        
      </div>           
    </header>   
  )
}

export default Header;