import React from 'react';
import { AuthProvider } from './AuthContext';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Login } from './login/Login';
import { MyReviews } from './MyReviews/MyReviews';
import { OtherReviews } from './OtherReviews/OtherReviews';
import './app.css';

function App () {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="body">
                    <header>
                        <nav className="navbar navbar-expand-lg" id="head-nav">
                            <div>
                                <img className="navbar-brand" id="logo" src="/public/logo.png" alt="logo"></img>
                            </div>
                            <menu className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Login</NavLink> 
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/OtherReviews">
                                        Other Reviews
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/MyReviews">
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
                            />
                            <Route path="/MyReviews" element={ <ProtectedRoute  element={<MyReviews />} />} />
                            <Route path="/OtherReviews" element={ <ProtectedRoute  element={<OtherReviews />} />} />
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
        </AuthProvider>
    );
}

export default App;