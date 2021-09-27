import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Input from './shared/Input'
import ListItem from './shared/ListItem'

class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        const { newItem, list } = props
        this.state = {
            newItem: newItem,
            list: list
        }
        this.handleClick = this.handleClick.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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
        console.log(id)
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
                isCompleted: false
            }],
            newItem: ""
        });
    }

    deleteItem(id) {
        this.setState({ list: [...this.state.list].filter(item => item.id !== id) });
    }

    render() {
        return (
            <div className="inputcontainer">

                <button className="allbutton" onClick={() => this.handleAll()}>
                    <KeyboardArrowDownOutlinedIcon />
                </button>

                <Input
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                    onKeyDown={e => e.key === "Enter" && this.addItem()}
                />

                <ListItem list={this.state.list} onclick={this.handleClick} ondelete={this.deleteItem} />

                <br />
                <div className="status">
                    <p>{this.itemsLeft()} items left</p>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

        )
    }
}

export default InputContainer