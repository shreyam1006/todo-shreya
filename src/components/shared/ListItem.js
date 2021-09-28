import React from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Input from './Input'

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newListItem: ''
        }
    }

    render() {
        return (
            <div>
                <li style={{ textDecoration: this.props.iscompleted ? 'line-through' : 'none' }} key={this.props.id}  >
                    <div onDoubleClick={() => this.props.onedit(this.props.id)} style={{ display: this.props.edit ? 'none' : 'flex' }}>
                        <button className="icon" onClick={() => this.props.onclick(this.props.id)}>
                            {this.props.iscompleted ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon />}
                        </button>
                        {this.props.value}
                        <button className="cross"  onClick={() => this.props.ondelete(this.props.id)}>x</button>
                    </div>

                    <Input type="text"
                        value={this.state.newItem}
                        onChange={e => this.props.updateinput("newListItem", e.target.value)}
                        onKeyDown={e => e.key === "Enter" && this.props.replaceitem(this.props.id)}
                        placeholder={this.props.value}
                        style={{ display: this.props.edit ? 'flex' : 'none' }}
                    />
                </li>

                
            </div>
        )
    }

}

export default ListItem