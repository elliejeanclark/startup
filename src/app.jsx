import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

function App () {
    return (
        <BrowserRouter>
        <div className="body">
            <header>
                <nav className="navbar navbar-expand-lg" id="head-nav">
                    <div className="container-fluid">
                        <img className="navbar-brand" id="logo" src="/logo.png" alt="logo"></img>
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

            <Routes>
                <Route
                    path='/'
                    element={<Login />}
                    exact
                />
                <Route path="/OtherReviews" element={<OtherReviews />} />
                <Route path="/MyReviews" element={<MyReviews />} />
            </Routes>

            <footer>
                <div className="container-fluid">
                    <h4 id="author">Author: Elinor Clark</h4>
                    <h4 id="github"><a href="https://github.com/elliejeanclark/startup">GitHub</a></h4>
                </div>
            </footer>
        </div>
    </BrowserRouter>
    );
}

export default App;