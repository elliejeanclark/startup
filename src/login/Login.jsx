import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './login.css';

export function Login() {
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("pswd").value;
        localStorage.setItem('userName', username);
        localStorage.setItem('password', password);
        setIsAuthenticated(true);
    }
    
    return (    
        <main id="login-content">
            <div id="title">
                <h1>Welcome to Pop In!</h1>
            </div>
            <div>
                <form id="login-form" onSubmit={handleLogin}>
                    <input type="username" className="form-control" id="username" placeholder="Enter Username" name="username"/>
                    <input type="password" className="form-control" id="pswd" placeholder="Enter password" name="pswd"/>
                    <input id="login-button" type="submit" className="btn btn-success" value="Log In"/>
                </form>
            </div>
        </main>
    );
}