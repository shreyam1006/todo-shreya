import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <input type={this.props.type} value={this.props.value} onChange={this.props.onChange} 
            placeholder={this.props.placeholder} onKeyDown={this.props.onKeyDown}/>
        )
    }
}

export default Input