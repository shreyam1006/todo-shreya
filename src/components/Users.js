import React, { useCallback, useEffect, useState } from 'react'
import db from './firebase'
import Input from './Input'
import Button from './Button'
import { onSnapshot, collection, addDoc } from '@firebase/firestore'


const Users = () => {
    const [users, setUser] = useState([])
    const [newUserEmail, setNewUserEmail] = useState('')
    const [newUserPassword, setNewUserPassword] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        onSnapshot(collection(db, 'users'), (snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data()))
        });

    }, [])

    const signUp = useCallback(() => {
        addDoc(collection(db, 'users'), { email: newUserEmail, password: newUserPassword })
        setUser(...users, { email: newUserEmail, password: newUserPassword })
        setMessage("Congratulations! Successfully signed up")
        return (setNewUserPassword(''), setNewUserEmail(''))
    }
        , [newUserEmail, newUserPassword,users])

    const signIn = () => {
        onSnapshot(collection(db, 'users'), (snapshot) => {
            const usersList=snapshot.docs.map((doc) => doc.data())
            usersList.map((user) => {
                if (user.email === newUserEmail && user.password === newUserPassword) {
                    setMessage('Successfully Logged In!')
                    setNewUserPassword('')
                    setNewUserEmail('')
                }
                if(newUserEmail==='' || newUserPassword===''){
                    setMessage('Oops! Try Again')
                }
                return user
            })
        });
        
    }
    return (
        <div>
            <h3>Users</h3>
            <Input
                type="text"
                value={newUserEmail}
                placeholder="Email"
                onChange={e => setNewUserEmail(e.target.value)}
            />
            <Input
                type="password"
                value={newUserPassword}
                placeholder="Password"
                onChange={e => setNewUserPassword(e.target.value)}
            />

            <Button className="userbutton" content="Sign Up" onClick={signUp} />
            <Button className="userbutton" content="Login" onClick={signIn} />
            <p>{message}</p>
        </div>
    )

}

export default Users