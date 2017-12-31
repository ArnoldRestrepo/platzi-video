import React from "react";

function Icon(props){
    const {
        color,
        size
    } = props
    return(
        <svg
            fill={color}
            height={size}
            width={size + 10}
            viewBox="0 0 32 32">
                {props.children}
        </svg>   
    )
}
export default Icon;