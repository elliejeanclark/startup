import React from 'react';
import './login.css';

export function Login() {
    return (    
        <main id="login-content">
            <div id="title">
                <h1>Welcome to Pop In!</h1>
            </div>
            <div>
                <form id="login-form">
                    <input type="username" class="form-control" id="username" placeholder="Enter Username" name="username"/>
                    <input type="password" class="form-control" placeholder="Enter password" name="pswd"/>
                    <input id="login-button" type="submit" class="btn btn-success" value="Log In"/>
                </form>
            </div>
        </main>
    );
}