import React from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { clickActiveButton, clickAllButton, clickCompletedButton, clickClearCompletedButton } from './redux/actions'


const Status = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="status" style={{ display: props.list.length > 0 ? 'flex' : 'none' }}>
            <p>{props.itemsLeft} items left</p>
            <div className="buttonset">
                <Button
                    className="statusbutton"
                    onClick={() => dispatch(clickAllButton())}
                    content='All'
                />
                <Button
                    className="statusbutton"
                    onClick={() => dispatch(clickActiveButton())}
                    content='Active'
                />
                <Button
                    className="statusbutton"
                    onClick={() => dispatch(clickCompletedButton())}
                    content='Completed'
                />
            </div>
            <Button
                className="statusbutton"
                onClick={() => dispatch(clickClearCompletedButton())}
                content='Clear Completed'
                style={{ color: props.list.length - props.itemsLeft >= 1 ? 'grey' : 'white' }}
            />

        </div>

    )
}

export default Status