import React from 'react'

const Nav = () => {
    return (
        <nav>
            <ul className="type">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/todo">
                    <li>Todo</li>
                </a>
                <a href="/users">
                    <li>Users</li>
                </a>
            </ul>
        </nav>
    )

}

export default Nav