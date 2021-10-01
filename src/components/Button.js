import React from "react";

const Button = (props) => {
    const { className, onClick, style, content } = props
    return (
        <button className={className} onClick={onClick} style={style} >
            {content}
        </button>
    )
}

export default Button