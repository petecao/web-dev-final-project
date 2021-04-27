import firebase from 'firebase/app';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/register">Register</a></li>
                <li className="nav-item"><a href="/login">Login</a></li>
                <li className="nav-item"><a href="/profile">Profile</a></li>
                <li className="nav-item"><a href="/logout"><button onClick={() => firebase.auth().signOut()}>Sign Out</button></a></li>
            </ul>
        </div>
    )
}

export default Navbar;