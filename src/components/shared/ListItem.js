import React, { useState } from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Input from './Input'
import Button from './Button';

const ListItem=(props)=> {

    let [newListItem, setNewListItem] = useState('');

    const onDoubleClickEdit=(value)=> {

        setNewListItem(newListItem = value)
        props.onEdit(props.id)

    }
    

    return (
        <div className="list"
            style={{ textDecoration: props.iscompleted ? 'line-through' : 'none' }}
            key={props.id}  >

            <div className="listitem"
                onDoubleClick={() => onDoubleClickEdit(props.value)}
                style={{ display: props.edit ? 'none' : 'flex' }}>

                <div className="leftsection" style={{ opacity: props.iscompleted ? '30%' : '100%' }}>
                    <Button
                        className="icon"
                        onClick={() => props.onClick(props.id)}
                        content={props.iscompleted ? <CheckCircleOutlinedIcon sx={{ fontSize: 40 }} /> : <CircleOutlinedIcon sx={{ fontSize: 40 }} />}
                    />
                    <h7> {props.value}</h7>
                </div>
                <Button
                    className="cross"
                    onClick={() => props.onDelete(props.id)}
                    content={<ClearOutlinedIcon />}
                />

            </div>

            <Input type="text"
                className="editInput"
                value={newListItem}
                onChange={e => setNewListItem(newListItem = e.target.value)}
                onKeyDown={e => e.key === "Enter" && props.replaceItem(props.id, newListItem)}
                placeholder={props.value}
                style={{ display: props.edit ? 'flex' : 'none' }}
            />
        </div>
    )
}


export default ListItem