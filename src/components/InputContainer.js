import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Input from './shared/Input'
import ListItem from './shared/ListItem'

class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list: [],
            listMode: 'all'
        }

        this.handleClick = this.handleClick.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.replaceItem = this.replaceItem.bind(this);
        this.handleAll = this.handleAll.bind(this);
    }

    handleClick(id) {

        this.setState({
            list: [...this.state.list].map(item => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted;
                }
                return item
            })
        });
    }

    handleAll() {

        this.setState({
            list: [...this.state.list].map(item => {
                if (item.isCompleted === false) {
                    item.isCompleted = true;
                }
                return item
            })
        });
    }


    addItem() {

        this.setState({
            list: [...this.state.list, {
                id: new Date(),
                value: this.state.newItem.slice(),
                isCompleted: false,
                edit: false
            }],
            newItem: ""
        });
    }


    editItem(id) {
        this.setState({
            list: [...this.state.list].map(item => {
                if (item.id === id) {
                    item.edit = true
                }
                return item
            })
        })
    }

    replaceItem(id,value) {
        this.setState({
            list: [...this.state.list].map(item => {
                if (item.id === id) {
                    item.value = value
                    item.edit = false
                }
                return item
            })
        })

    }

    listToShow() {
        if (this.state.listMode === 'all') {
            return this.state.list
        }
        if (this.state.listMode === 'active') {
            return [...this.state.list].filter(item => item.isCompleted === false)
        }
        if (this.state.listMode === 'completed') {
            return [...this.state.list].filter(item => item.isCompleted === true)
        }
        return [...this.state.list].filter(item => item.isCompleted === false)

    }


    render() {

        const listToMap= this.listToShow();
        const itemsLeft= [...this.state.list].filter(item => item.isCompleted === false).length

        return (
            <div className="inputcontainer">

                <div className="inputsection">
                    <button className="allbutton" onClick={() => this.handleAll()}>
                        <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 40 }} />
                    </button>

                    <Input
                        className="maininput"
                        type="text"
                        placeholder="What needs to be done?"
                        value={this.state.newItem}
                        onChange={e => this.setState({newItem: e.target.value})}
                        onKeyDown={e => e.key === "Enter" && this.addItem()}
                    />
                </div>

                <div>
                    {listToMap.map(item =>

                        <ListItem iscompleted={item.isCompleted}
                            value={item.value}
                            id={item.id}
                            edit={item.edit}
                            onclick={this.handleClick}
                            ondelete={(id)=>this.setState({ list: [...this.state.list].filter(item => item.id !== id) })}
                            onedit={this.editItem}
                            replaceitem={this.replaceItem}
                        />)}

                </div>

                <div className="status">
                    <p>{itemsLeft} items left</p>
                    <div className="buttonset">
                        <button className="statusbutton" onClick={() =>  this.setState({ listMode: 'all' }) }>All</button>
                        <button className="statusbutton" onClick={() => this.setState({ listMode: 'active' })}>Active</button>
                        <button className="statusbutton" onClick={() => this.setState({ listMode: 'completed' })}>Completed</button>
                    </div>
                    <button className='statusbutton' onClick={()=>this.setState({ list: [...this.state.list].filter(item => item.isCompleted === false) })} 
                    style={{ color: this.state.list.length - itemsLeft >= 1 ? 'grey' : 'white' }}>Clear Completed</button>
                </div>
            </div>

        )
    }
}

export default InputContainer