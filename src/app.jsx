import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/Login';
import { MyReviews } from './MyReviews/MyReviews';
import { OtherReviews } from './OtherReviews/OtherReviews';
import './app.css';

function App () {
    console.log("App is rendering")
    return (
        <BrowserRouter>
        <div className="body">
            <header>
                <nav className="navbar navbar-expand-lg" id="head-nav">
                    <div className="container-fluid">
                        <img className="navbar-brand" id="logo" src="/public/logo.png" alt="logo"></img>
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
                    </div>
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
                <div>
                    <h4 id="author">Author: Elinor Clark</h4>
                </div>
                <div>
                    <h4 id="github"><a href="https://github.com/elliejeanclark/startup">GitHub</a></h4>
                </div>
            </footer>
        </div>
    </BrowserRouter>
    );
}

export default App;