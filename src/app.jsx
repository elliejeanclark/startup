import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'botstrap/dist/css/bootstrap.min.css';

function App () {
    <BrowserRouter>
        <div>
            <header>
                <nav className="navbar navbar-expand-lg" id="head-nav">
                    <div className="container-fluid">
                        <img className="navbar-brand" id="logo" src="/Images/Logo.png" alt="logo"></img>
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
        </div>

        <Routes>
            <Route
                path='/'
                element={<Login />}
                exact
            />
            <Route path="/OtherReviews" element={<OtherReviews />} />
            <Route path="/MyReviews" element={<MyReviews />} />
        </Routes>
    </BrowserRouter>
}

export default App;

                        {/* <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="MyReviews.html">My Reviews</a>
                            </li>
                        </ul>
                        <form id="login-form" class="ms-auto">
                            <div class="row">
                                <div class="col">
                                    <input class="form-control" type="text" id="username" name="username" placeholder="Username">
                                </div>
                                <div class="col">
                                    <input class="form-control" type="password" id="password" name="password" placeholder="Password">
                                </div>
                                <div class="col-auto">
                                    <input id="submit-button" class="btn" type="submit" value="Log In">
                                </div>
                            </div>
                        </form> */}