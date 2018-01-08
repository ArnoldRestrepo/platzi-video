import React from 'react';
import './modal.css';

function Modal(props){
    return(
        <div className="Modal">
            <div className="Modal-close"></div>
            asd
            {props.children}
            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal;