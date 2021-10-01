import React, { useState, useMemo, useCallback } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Input from './Input'
import ListItem from './ListItem'
import Status from './Status';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { addListItem, clickAll } from './redux/actions/index'

const InputContainer = () => {
    let [newItem, setNewItem] = useState('')

    const todo = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();
    const itemsLeft = useMemo(() => todo.list.filter(item => item.isCompleted !== true).length, [todo.list])
    const all = useCallback(() => dispatch(clickAll(itemsLeft)), [dispatch, itemsLeft])

    const listToMap = useMemo(() => {
        if (todo.listMode === 'all') {
            return todo.list
        }
        if (todo.listMode === 'active') {
            return [...todo.list].filter(item => item.isCompleted === false)
        }
        if (todo.listMode === 'completed') {
            return [...todo.list].filter(item => item.isCompleted === true)
        }
        return todo.list
    }
        , [todo.list, todo.listMode]);


    return (
        <div className="inputcontainer">

            <div className="inputsection">
                <Button
                    className="allbutton" onClick={all}
                    content={<KeyboardArrowDownOutlinedIcon sx={{ fontSize: 40 }} />}
                    style={{ display: todo.list.length > 0 ? 'flex' : 'none' }}
                />

                <Input
                    className="maininput"
                    type="text"
                    placeholder="What needs to be done?"
                    value={newItem}
                    onChange={e => setNewItem(newItem = e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") { return (dispatch(addListItem(newItem)), setNewItem('')) } }}
                />
            </div>

            <div>
                {listToMap.map(item =>

                    <ListItem isCompleted={item.isCompleted}
                        value={item.value}
                        id={item.id}
                        key={item.id}
                        edit={item.edit}
                    />)}

            </div>

            <Status
                itemsLeft={itemsLeft}
                list={todo.list}
            />

        </div>

    )

}

export default InputContainer