import React from 'react'

function Input(props){
    return(
        <input className={props.className} type={props.type} value={props.value} onChange={props.onChange} style={props.style}
        placeholder={props.placeholder} onKeyDown={props.onKeyDown}/>
    )
}

export default Input