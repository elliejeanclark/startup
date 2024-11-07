import React from 'react';
import { AuthProvider } from './AuthContext';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Login } from './login/Login';
import { MyReviews } from './MyReviews/MyReviews';
import { OtherReviews } from './OtherReviews/OtherReviews';
import './app.css';

function App () {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
      getReviews();
    }, []);
  
    const getReviews = async () => {
      try {
        const response = await fetch('/api/myReviews/get', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
  
  
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const reviewTitle = event.target.title.value;
      const reviewText = event.target.review.value;
      const reviewRating = event.target.rating.value;
  
      const response = await fetch('/api/myReviews/post', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ reviewTitle, reviewText, reviewRating })
      });
  
      if (response.ok) {
        getReviews();
      }
    }
    
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="body">
                    <header>
                        <nav className="navbar navbar-expand-lg" id="head-nav">
                            <div>
                                <img className="navbar-brand" id="logo" src="/Logo.png" alt="logo"></img>
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

                    <Routes>
                            <Route
                                path='/'
                                element={<Login />}
                            />
                            <Route path="/MyReviews" element={ <ProtectedRoute  element={<MyReviews reviews={reviews} handleSubmit={handleSubmit} />} />} />
                            <Route path="/OtherReviews" element={ <ProtectedRoute  element={<OtherReviews />} />} />
                    </Routes>

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