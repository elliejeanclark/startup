import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/Login';
import { MyReviews } from './MyReviews/MyReviews';
import { OtherReviews } from './OtherReviews/OtherReviews';
import { AuthState } from './login/authstate';
import './app.css';

function App () {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
        <div className="body">
            <header>
                <nav className="navbar navbar-expand-lg" id="head-nav">
                    <div>
                        <img className="navbar-brand" id="logo" src="/public/logo.png" alt="logo"></img>
                    </div>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">Login</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="otherreviews">
                                Other Reviews
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="myreviews">
                                My Reviews
                            </NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<Login />}
                        exact
                    />
                    <Route path="/OtherReviews" element={<OtherReviews />} />
                    <Route path="/MyReviews" element={<MyReviews />} />
                </Routes>
            </main>

            <footer>
                <div id="author-container">
                    <h4 id="author">Author: Elinor Clark</h4>
                </div>
                <div id="github-container">
                    <h4 id="github"><a href="https://github.com/elliejeanclark/startup">GitHub</a></h4>
                </div>
            </footer>
        </div>
    </BrowserRouter>
    );
}

export default App;