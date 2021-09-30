import React, { useCallback, useState, useMemo } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Input from './shared/Input'
import ListItem from './shared/ListItem'
import Status from './shared/Status';
import Button from './shared/Button';
import { useSelector,useDispatch } from 'react-redux';
import {addListItem,deleteListItem,editListItem,clickAllButton,clickActiveButton,clickCompletedButton} from './redux/actions/index'

const InputContainer = () => {
    let [newItem, setNewItem] = useState('')
    let [list, setList] = useState([])
    let [listMode, setListMode] = useState('all')



    const itemsLeft = useMemo(()=>[...list].filter(item => item.isCompleted === false).length,[list])

    const clickAll= useCallback(()=>(itemsLeft) => {
        let flag = itemsLeft > 0 ? false : true;
        setList(
            list = [...list].map(item => {
                if (item.isCompleted === flag) {
                    item.isCompleted = !flag;
                }
                return item
            })
        );
    },[itemsLeft])

    const addItem =useMemo(()=>()=>{
        setList(
            list = [...list, {
                id: new Date(),
                value: newItem.slice(),
                isCompleted: false,
                edit: false
            }]
        )
        setNewItem(newItem = "")
    },[list,newItem])

    const click=useCallback(()=>(id) => {
        console.log("completed/active")
        setList(list = [...list].map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item
        })
        )
    },[list])

    const deleteItem=useCallback(()=>(id) => {
        setList(list = [...list].filter(item => item.id !== id))

    },[list])


    const editItem=useCallback(()=>(id) => {
        setList(list = ([...list].map(item => {
            if (item.id === id) {
                item.edit = true
            }
            return item
        }))
        )
    },[list])

    const replaceItem=useCallback(()=>(id, value) => {
        setList(list = [...list].map(item => {
            if (item.id === id) {
                item.value = value
                item.edit = false
            }
            return item
        })
        )
    },[list])


    const listToMap = useMemo(()=>{
        if (listMode === 'all') {
            return list
        }
        if (listMode === 'active') {
            return [...list].filter(item => item.isCompleted === false)
        }
        if (listMode === 'completed') {
            return [...list].filter(item => item.isCompleted === true)
        }
        return [...list].filter(item => item.isCompleted === false)
    }
        ,[list,listMode]);


    const todo = useSelector((state) => state.todoReducer);
    const display = useSelector((state) => state.displayReducer);
    const dispatch = useDispatch();

    return (
        <div className="inputcontainer">

            <div className="inputsection">
                <Button
                    className="allbutton" onClick={clickAll}
                    content={<KeyboardArrowDownOutlinedIcon sx={{ fontSize: 40 }} />}
                    style={{ display: list.length > 0 ? 'flex' : 'none' }}
                />

                <Input
                    className="maininput"
                    type="text"
                    placeholder="What needs to be done?"
                    value={newItem}
                    onChange={e => setNewItem(newItem = e.target.value)}
                    onKeyDown={e => e.key === "Enter" && dispatch(addListItem(newItem))}
                />
            </div>

            <div>
                {listToMap.map(item =>

                    <ListItem iscompleted={item.isCompleted}
                        value={item.value}
                        id={item.id}
                        edit={item.edit}
                        onClick={click(item.id)}
                        // onDelete={deleteItem(item.id)}
                        onDelete={dispatch(deleteListItem(item.id))}
                        onEdit={editItem(item.id)}
                        replaceItem={replaceItem(item.id, item.value)}
                    />)}

            </div>

            <Status
                itemsLeft={itemsLeft}
                onClickAll={() => setListMode(listMode = 'all')}
                onClickActive={() => setListMode(listMode = 'active')}
                onClickCompleted={() => setListMode(listMode = 'completed')}
                onClickClearCompleted={() => setList(list = [...list].filter(item => item.isCompleted === false))}
                list={list}
            />

        </div>

    )

}

export default InputContainer