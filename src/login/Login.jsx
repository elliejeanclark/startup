import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './login.css';

export function Login() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/auth/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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

    const handleCreateAccount = (event) => {

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
                            <input onClick={handleCreateAccount} id="create-account-button" type="button" className="btn btn-primary" value="Create Account" />
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}