import React from 'react'
import Button from './Button'

function Status(props){
    return (
        <div className="status" style={{ display: props.list.length > 0 ? 'flex' : 'none' }}>
            <p>{props.itemsLeft} items left</p>
            <div className="buttonset">
                <Button
                    className="statusbutton"
                    onClick={() => props.onClickAll()}
                    content='All'
                />
                <Button
                    className="statusbutton"
                    onClick={() => props.onClickActive()}
                    content='Active'
                />
                <Button
                    className="statusbutton"
                    onClick={() => props.onClickCompleted()}
                    content='Completed'
                />
            </div>
            <Button
                className="statusbutton"
                onClick={() => props.onClickClearCompleted()}
                content='Clear Completed'
                style={{ color: props.list.length - props.itemsLeft >= 1 ? 'grey' : 'white' }}
            />

        </div>

    )
}

export default Status