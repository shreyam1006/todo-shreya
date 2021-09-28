import React from 'react'
import Button from './Button'

class Status extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="status" style={{ display: this.props.list.length > 0 ? 'flex' : 'none' }}>
                <p>{this.props.itemsLeft} items left</p>
                <div className="buttonset">
                    <Button
                        className="statusbutton"
                        onClick={() => this.props.onClickAll()}
                        content='All'
                    />
                    <Button
                        className="statusbutton"
                        onClick={() => this.props.onClickActive()}
                        content='Active'
                    />
                    <Button
                        className="statusbutton"
                        onClick={() => this.props.onClickCompleted()}
                        content='Completed'
                    />
                </div>
                <Button
                    className="statusbutton"
                    onClick={() => this.props.onClickClearCompleted()}
                    content='Clear Completed'
                    style={{ color: this.props.list.length - this.props.itemsLeft >= 1 ? 'grey' : 'white' }}
                />

            </div>

        )
    }
}

export default Status