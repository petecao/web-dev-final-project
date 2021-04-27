import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/register">Register</a></li>
                <li className="nav-item"><a href="/login">Login</a></li>
                <li className="nav-item"><a href="/profile">Profile</a></li>
            </ul>
        </div>
    )
}

export default Navbar;