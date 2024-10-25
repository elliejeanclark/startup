import React from 'react';

export function Login() {
    return (    
        <main>
            <div id="title">
                <h1>Welcome to Pop In!</h1>
            </div>
            <div>
                <form id="login-form">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    );
}