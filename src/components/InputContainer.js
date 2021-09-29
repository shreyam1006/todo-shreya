import React, { useMemo, useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Input from './shared/Input'
import ListItem from './shared/ListItem'
import Status from './shared/Status';
import Button from './shared/Button';

const InputContainer = () => {
    let [newItem, setNewItem] = useState('')
    let [list, setList] = useState([])
    let [listMode, setListMode] = useState('all')


    const handleAll = (itemsLeft) => {
        let flag = itemsLeft > 0 ? false : true;

        setList(
            list = [...list].map(item => {
                if (item.isCompleted === flag) {
                    item.isCompleted = !flag;
                }
                return item
            })
        );
    }

    const addItem = () => {

        setList(
            list = [...list, {
                id: new Date(),
                value: newItem.slice(),
                isCompleted: false,
                edit: false
            }]
        )
        setNewItem(newItem = "")
    }
    
//   const factorial = useMemo(() => factorialOf(number), [number]);

    const handleClick = (id) => {
        setList(list = [...list].map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item
        })
        )
    }

    const handleDelete = (id) => {
        setList(list = [...list].filter(item => item.id !== id))

    }

    const handleEdit = (id) => {
        setList(list = ([...list].map(item => {
            if (item.id === id) {
                item.edit = true
            }
            return item
        }))
        )
    }

    const handleReplace = (id, value) => {
        setList(list = [...list].map(item => {
            if (item.id === id) {
                item.value = value
                item.edit = false
            }
            return item
        })
        )
    }


    const listToShow = () => {
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


    const listToMap = listToShow();
    const itemsLeft = [...list].filter(item => item.isCompleted === false).length

    return (
        <div className="inputcontainer">

            <div className="inputsection">
                <Button
                    className="allbutton" onClick={() => handleAll(itemsLeft)}
                    content={<KeyboardArrowDownOutlinedIcon sx={{ fontSize: 40 }} />}
                    style={{ display: list.length > 0 ? 'flex' : 'none' }}
                />

                <Input
                    className="maininput"
                    type="text"
                    placeholder="What needs to be done?"
                    value={newItem}
                    onChange={e => setNewItem(newItem = e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addItem()}
                />
            </div>

            <div>
                {listToMap.map(item =>

                    <ListItem iscompleted={item.isCompleted}
                        value={item.value}
                        id={item.id}
                        edit={item.edit}
                        onClick={(id) => handleClick(id)}
                        onDelete={(id) => handleDelete(id)}
                        onEdit={(id) => handleEdit(id)}
                        replaceItem={(id, value) => handleReplace(id, value)}
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