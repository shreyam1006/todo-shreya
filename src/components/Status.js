import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { clickActiveButton, clickAllButton, clickCompletedButton, clickClearCompletedButton } from './redux/actions'


const Status = (props) => {
    const { itemsLeft, list } = props
    const dispatch = useDispatch()
    const clickAll = useCallback(() => dispatch(clickAllButton()), [dispatch])
    const clickActive = useCallback(() => dispatch(clickActiveButton()), [dispatch])
    const clickCompleted = useCallback(() => dispatch(clickCompletedButton()), [dispatch])
    const clickClearCompleted = useCallback(() => dispatch(clickClearCompletedButton()), [dispatch])

    return (
        <div className="status" style={{ display: list.length > 0 ? 'flex' : 'none' }}>
            <p>{itemsLeft} items left</p>
            <div className="buttonset">
                <Button
                    className="statusbutton"
                    onClick={clickAll}
                    content='All'
                />
                <Button
                    className="statusbutton"
                    onClick={clickActive}
                    content='Active'
                />
                <Button
                    className="statusbutton"
                    onClick={clickCompleted}
                    content='Completed'
                />
            </div>
            <Button
                className="statusbutton"
                onClick={clickClearCompleted}
                content='Clear Completed'
                style={{ color: list.length - itemsLeft >= 1 ? 'grey' : 'white' }}
            />

        </div>

    )
}

export default Status