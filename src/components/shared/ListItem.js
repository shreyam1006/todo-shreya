import React from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <ul>
                {[...this.props.list].map(item => {
                    return (

                        <li style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }} key={item.id} >
                            <button onClick={() => this.props.onclick(item.id)}>
                                {item.isCompleted ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon />}
                            </button>
                            {item.value}
                            <button className="cross" onClick={() => this.props.ondelete(item.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default ListItem