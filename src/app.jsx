import React from 'react';
import { AuthProvider } from './AuthContext';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Login } from './login/Login';
import { MyReviews } from './MyReviews/MyReviews';
import { OtherReviews } from './OtherReviews/OtherReviews';
import './app.css';

function App () {
  const [newRatings, setNewRatings] = React.useState([0, 0, 0]);
  const [disabledReviews, setDisabledReviews] = React.useState([false, false, false]);
  const [oldRatings, setOldRatings] = React.useState([]);
  const [recentReviews, setRecentReviews] = React.useState(new Array(3).fill({}));

  const getOldRatings = async () => {
    try {
      const response = await fetch(`api/otherReviews/oldRatings`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOldRatings(data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const updateRating = async (reviewID) => {
    try {
      const response = await fetch('/api/otherReviews/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({ reviewID, newRating: newRatings[reviewID], token: localStorage.getItem('token') }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setDisabledReviews(prev => {
          const updated = [...prev];
          updated[reviewID] = true;
          return updated;
        });
        setNewRatings(prev => {
          const updated = [...prev];
          updated[reviewID] = data.updatedRating;
          return updated;
        })
      }
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  }

  const getRatedBy = async (reviewTitle) => {
    try {
      const response = await fetch('/api/otherReviews/ratedBy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reviewTitle }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error getting rated by:', error);
    }
  }

  const getRecentReviews = async () => {
    try {
      const response = await fetch('/api/otherReviews/reviews', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        setRecentReviews(data);
        return data; // Return fetched reviews
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
    
  const [reviews, setReviews] = React.useState([]);
  
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
    const token = localStorage.getItem('token');
  
    const response = await fetch('/api/myReviews/post', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviewTitle, reviewText, reviewRating, token })
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
                    <Route path="/MyReviews" element={ <ProtectedRoute  element={<MyReviews reviews={reviews} handleSubmit={handleSubmit} getReviews={getReviews} />} />} />
                    <Route path="/OtherReviews" element={<ProtectedRoute element={<OtherReviews newRatings={newRatings} setNewRatings={setNewRatings} disabledReviews={disabledReviews} setDisabledReviews={setDisabledReviews} oldRatings={oldRatings} recentReviews={recentReviews} updateRating={updateRating} getRecentReviews={getRecentReviews} getOldRatings={getOldRatings} getRatedBy={getRatedBy} />} />} />
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