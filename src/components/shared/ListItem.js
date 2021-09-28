import React from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Input from './Input'

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newListItem:""
        }

    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    ondoubleclickedit(value){
        
        this.setState({
            newListItem:value
        })
        this.props.onedit(this.props.id)
    }

    render() {
        return (
            <div className="listcontainer">
                <div className="list" style={{ textDecoration: this.props.iscompleted ? 'line-through' : 'none' }} key={this.props.id}  >
                    <div className="listitem" onDoubleClick={() => this.ondoubleclickedit(this.props.value)} style={{ display: this.props.edit ? 'none' : 'flex' }}>
                        <div className="content" style={{ opacity: this.props.iscompleted ? '30%' : '100%' }}>
                            <button className="icon" onClick={() => this.props.onclick(this.props.id)}>
                                {this.props.iscompleted ? <CheckCircleOutlinedIcon sx={{ fontSize: 40 }} /> : <CircleOutlinedIcon sx={{ fontSize: 40 }} />}
                            </button>
                           <h7> {this.props.value}</h7>
                        </div>
                        <button className="cross" onClick={() => this.props.ondelete(this.props.id)}>x</button>
                    </div>

                    <Input type="text"
                        value={this.state.newListItem}
                        onChange={e => this.updateInput("newListItem", e.target.value)}
                        onKeyDown={e => e.key === "Enter" && this.props.replaceitem(this.props.id,this.state.newListItem)}
                        placeholder={this.props.value}
                        style={{ display: this.props.edit ? 'flex' : 'none' }}
                    />
                </div>


            </div>
        )
    }

}

export default ListItem