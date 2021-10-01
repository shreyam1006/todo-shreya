import React from "react";

const Button=(props)=>{
    return (
        <button className={props.className} onClick={props.onClick} style={props.style} >
            {props.content}
        </button>
    )
}

export default Button