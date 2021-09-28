import React from "react";

class Button extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick} style={this.props.style} >
                {this.props.content}
            </button>
        )
    }

}

export default Button