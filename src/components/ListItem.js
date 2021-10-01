import React, { useState } from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Input from './Input'
import Button from './Button';
import { click, deleteListItem, editListItem, replaceListItem } from './redux/actions'
import { useDispatch } from 'react-redux';

const ListItem = (props) => {

    let [newListItem, setNewListItem] = useState('');
    const dispatch = useDispatch();

    const onDoubleClickEdit = (value) => {
        setNewListItem(newListItem = value)
        dispatch(editListItem(props.id))
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
                        onClick={() => dispatch(click(props.id))}
                        content={props.iscompleted ? <CheckCircleOutlinedIcon sx={{ fontSize: 40 }} /> : <CircleOutlinedIcon sx={{ fontSize: 40 }} />}
                    />
                    <div> {props.value}</div>
                </div>
                <Button
                    className="cross"
                    onClick={() => dispatch(deleteListItem(props.id))}
                    content={<ClearOutlinedIcon />}
                />

            </div>

            <Input type="text"
                className="editInput"
                value={newListItem}
                onChange={e => setNewListItem(newListItem = e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") { return (dispatch(replaceListItem(props.id, newListItem))) } }}
                placeholder={props.value}
                style={{ display: props.edit ? 'flex' : 'none' }}
            />
        </div>
    )
}


export default ListItem