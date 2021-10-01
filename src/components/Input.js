import React from 'react'

const Input = (props) => {
    const { className, type, value, onChange, style, placeholder, onKeyDown } = props
    return (
        <input className={className} type={type} value={value} onChange={onChange} style={style}
            placeholder={placeholder} onKeyDown={onKeyDown} />
    )
}

export default Input