import React from 'react';
import './Popup.css'

const Popup = ({ header, descr, fields, buttons }) => {
    return (
        <div className='Popup' >
            <div className='Popup_window'> 
                <div className = 'Popup_content'>
                    <h4 className = 'Popup_header'>{header}</h4>
                    <div className = 'Popup_descr'>{descr}</div>
                    <div className = 'Popup_fields'>{fields}</div> 
                    <div className = 'Popup_buttons'>{buttons}</div> 
                </div>                         
            </div>                      
        </div>
    )
}

export default Popup;