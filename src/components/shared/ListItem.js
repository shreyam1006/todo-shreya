import React from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Input from './Input'

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newListItem: ""
        }

    }

    onDoubleClickEdit(value) {

        this.setState({
            newListItem: value
        })
        this.props.onedit(this.props.id)
    }

    render() {
        return (
            <div className="list" 
            style={{ textDecoration: this.props.iscompleted ? 'line-through' : 'none' }} 
            key={this.props.id}  >

                <div className="listitem" 
                onDoubleClick={() => this.onDoubleClickEdit(this.props.value)} 
                style={{ display: this.props.edit ? 'none' : 'flex' }}>

                    <div className="leftsection" style={{ opacity: this.props.iscompleted ? '30%' : '100%' }}>
                        <button className="icon" onClick={() => this.props.onclick(this.props.id)}>
                            {this.props.iscompleted ? <CheckCircleOutlinedIcon sx={{ fontSize: 40 }} /> : <CircleOutlinedIcon sx={{ fontSize: 40 }} />}
                        </button>
                        <h7> {this.props.value}</h7>
                    </div>
                    <button className="cross" onClick={() => this.props.ondelete(this.props.id)}><ClearOutlinedIcon/></button>
                </div>

                <Input type="text"
                    className="editInput"
                    value={this.state.newListItem}
                    onChange={e => this.setState({ newListItem: e.target.value })}
                    onKeyDown={e => e.key === "Enter" && this.props.replaceitem(this.props.id, this.state.newListItem)}
                    placeholder={this.props.value}
                    style={{ display: this.props.edit ? 'flex' : 'none' }}
                />
            </div>
        )
    }

}

export default ListItem