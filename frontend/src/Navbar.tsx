import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import Search from './Search';



const Navbar = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const onAuthStateChange = () => {
        return firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        })
    }
    useEffect(() => onAuthStateChange(), [])
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><a href="/">Home</a></li>
                <Search />
                {!user && <li className="nav-item"><a href="/login">Login</a></li>}
                {user && <li className="nav-item"><a href="/profile">Profile</a></li>}
                {user && <li className="nav-item"><a href="/logout"><button onClick={() => firebase.auth().signOut()}>Sign Out</button></a></li>}
            </ul>
        </div>
    )
}

export default Navbar;