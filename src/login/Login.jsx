import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './login.css';

export function Login() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [welcomeMessage, setWelcomeMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

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
                setIsAuthenticated(true);
                setUsername(username);
                setPassword(password);
                setWelcomeMessage(`Welcome, ${username}!`);
                setErrorMessage('');
            } else {
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        console.log('token:', localStorage.getItem('token'));
    };

    const handleLogout = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');

        if (token) {
            try {
                const response = await fetch('/api/auth/logout', {
                    method: "DELETE",
                    headers: { 'Content-Type': 'applicaiton/json' },
                    body: JSON.stringify({ token })
                });

                if (response.ok) {
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                    console.log('Logged out');
                    setErrorMessage('');
                    setWelcomeMessage('');
                    setUsername('');
                    setPassword('');
                }
            } catch (error) {
                alert('You are not logged in');
            }
        } else {
            alert('You are not logged in');
        }
    }

    const handleCreateAccount = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/auth/create', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                setIsAuthenticated(true);
                setUsername(username);
                setPassword(password);
                setWelcomeMessage(`Welcome, ${username}!`);
                setErrorMessage('');
            } else {
                setErrorMessage('That username is already taken');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (    
        <main id="login-content">
            <div id="title">
                <h1>Welcome to Pop In!</h1>
                <h3 id="welcome-message"> { welcomeMessage } </h3>
                <h3 id="error-message"> { errorMessage } </h3>
            </div>
            <div>
                <form id="login-form" onSubmit={handleLogin}>
                    <div id="login-inputs">
                        <input onChange={(e) => setUsername(e.target.value)} value={username} type="username" className="form-control" id="username" placeholder="Enter Username" name="username"/>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="pswd" placeholder="Enter Password" name="pswd"/>
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