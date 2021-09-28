import React from 'react'

class Input extends React.Component{

    render(){
        return(
            <input type={this.props.type} value={this.props.value} onChange={this.props.onChange} style={this.props.style}
            placeholder={this.props.placeholder} onKeyDown={this.props.onKeyDown}/>
        )
    }
}

export default Input