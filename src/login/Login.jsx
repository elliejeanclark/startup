import React from 'react';
import './login.css';

function submission(event){
    const username = document.getElementById("username").value;
    const password = document.getElementById("pswd").value;
    localStorage.setItem('userName', username);
    localStorage.setItem('password', password);
    event.preventDefault();
}

export function Login() {
    return (    
        <main id="login-content">
            <div id="title">
                <h1>Welcome to Pop In!</h1>
            </div>
            <div>
                <form id="login-form" onSubmit={submission}>
                    <input type="username" className="form-control" id="username" placeholder="Enter Username" name="username"/>
                    <input type="password" className="form-control" placeholder="Enter password" name="pswd"/>
                    <input id="login-button" type="submit" className="btn btn-success" value="Log In"/>
                </form>
            </div>
        </main>
    );
}