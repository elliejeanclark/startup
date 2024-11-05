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
        const welcomeMessage = `Welcome ${username}!`;
        const welcomeMessageElement = document.getElementById("welcome-message");
        welcomeMessageElement.innerText = welcomeMessage;
        setIsAuthenticated(true);
    }

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('userName');
        localStorage.removeItem('password');
        const welcomeMessageElement = document.getElementById("welcome-message");
        welcomeMessageElement.innerText = "";
        setIsAuthenticated(false);
        document.getElementById("username").value = "";
        document.getElementById("pswd").value = "";
    }
    
    return (    
        <main id="login-content">
            <div id="title">
                <h1>Welcome to Pop In!</h1>
                <h3 id="welcome-message"></h3>
            </div>
            <div>
                <form id="login-form" onSubmit={handleLogin}>
                    <div id="login-inputs">
                        <input type="username" className="form-control" id="username" placeholder="Enter Username" name="username"/>
                        <input type="password" className="form-control" id="pswd" placeholder="Enter Password" name="pswd"/>
                    </div>
                    <div id="login-buttons">
                        <input id="login-button" type="submit" className="btn btn-success" value="Log In"/>
                        {isAuthenticated ? (
                            <input onClick={handleLogout} id="logout-button" type="button" className="btn btn-primary" value="Log Out" />
                        ) : (
                            <input id="create-account-button" type="button" className="btn btn-primary" value="Create Account" />
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}