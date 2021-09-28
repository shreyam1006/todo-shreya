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
        this.updateInput = this.updateInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.replaceItem = this.replaceItem.bind(this);
        this.handleAll = this.handleAll.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
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
        console.log(this.list)
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


    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    itemsLeft() {
        return [...this.state.list].filter(item => item.isCompleted === false).length
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

    deleteItem(id) {
        this.setState({ list: [...this.state.list].filter(item => item.id !== id) })
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



    clearCompleted() {
        this.setState({ list: [...this.state.list].filter(item => item.isCompleted === false) })
    }

    render() {

        return (
            <div className="inputcontainer">

                <div className="inputsection">
                    <button className="allbutton" onClick={() => this.handleAll()}>
                        <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 40 }} />
                    </button>

                    <Input
                        type="text"
                        placeholder="What needs to be done?"
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                        onKeyDown={e => e.key === "Enter" && this.addItem()}
                    />
                </div>
                <hr/>

                <div>
                    {this.listToShow().map(item =>

                        <ListItem iscompleted={item.isCompleted}
                            value={item.value}
                            id={item.id}
                            edit={item.edit}
                            onclick={this.handleClick}
                            ondelete={this.deleteItem}
                            onedit={this.editItem}
                            updateinput={this.updateInput}
                            replaceitem={this.replaceItem}
                        />)}

                </div>

                <br />
                <div className="status">
                    <p>{this.itemsLeft()} items left</p>
                    <div >
                        <button className="statusbutton" onClick={() => { this.setState({ listMode: 'all' }) }}>All</button>
                        <button className="statusbutton" onClick={() => this.setState({ listMode: 'active' })}>Active</button>
                        <button className="statusbutton" onClick={() => this.setState({ listMode: 'completed' })}>Completed</button>
                    </div>
                    <button className='statusbutton' onClick={this.clearCompleted} style={{ display: this.state.list.length - this.itemsLeft() >= 1 ? 'inline' : 'none' }}>Clear Completed</button>
                </div>
            </div>

        )
    }
}

export default InputContainer