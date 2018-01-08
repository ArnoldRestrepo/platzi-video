import React from 'react';
import logo from '../../../images/logo.png';
import './related-layout.css';

function Related(props){
    return(
        <div className="Related">
            <img src={logo} alt="Platzi Video" width="200" />
            {props.children}
        </div>
    )
}

export default Related;