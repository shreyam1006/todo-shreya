import React, { useState, useCallback } from 'react'
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
    const { isCompleted, value, id, edit } = props

    const onDoubleClickEdit = (value) => {
        setNewListItem(newListItem = value)
        dispatch(editListItem(id))
    }

    const clickItem = useCallback(() => dispatch(click(id)), [dispatch, id])
    const clickDelete = useCallback(() => dispatch(deleteListItem(id)), [dispatch, id])

    return (
        <div className="list"
            style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
            key={id}  >

            <div className="listitem"
                onDoubleClick={() => onDoubleClickEdit(value)}
                style={{ display: edit ? 'none' : 'flex' }}>

                <div className="leftsection" style={{ opacity: isCompleted ? '30%' : '100%' }}>
                    <Button
                        className="icon"
                        onClick={clickItem}
                        content={isCompleted ? <CheckCircleOutlinedIcon sx={{ fontSize: 40 }} /> : <CircleOutlinedIcon sx={{ fontSize: 40 }} />}
                    />
                    <div> {value}</div>
                </div>
                <Button
                    className="cross"
                    onClick={clickDelete}
                    content={<ClearOutlinedIcon />}
                />

            </div>

            <Input type="text"
                className="editInput"
                value={newListItem}
                onChange={e => setNewListItem(newListItem = e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") { return (dispatch(replaceListItem(id, newListItem))) } }}
                placeholder={value}
                style={{ display: edit ? 'flex' : 'none' }}
            />
        </div>
    )
}


export default ListItem