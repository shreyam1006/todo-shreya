import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="type">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/todo">
                    <li>Todo</li>
                </Link>
                <Link to="/users">
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav