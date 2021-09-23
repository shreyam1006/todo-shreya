import React from 'react';

const ListCom=(props)=>{
    return <li key={props.id}>
        {props.text}
        </li>
}
export default ListCom;