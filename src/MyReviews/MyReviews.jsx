import React from 'react';
import './MyReviews.css';

export function MyReviews() {
  const [reviews, setReviews] = React.useState([]);
  
  React.useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const response = await fetch('/api/myReviews/get');

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

    const response = await fetch('/api/myReviews/post', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ reviewTitle, reviewText, reviewRating })
    });
  }
  
  return (
    <main>
      <h1>My Reviews</h1>

      <p id="generated-quote">"Hello There! -- Obi-Wan Kenobi. (this will eventually be auto generated by another outside api)</p>
        
      <form id="my-review" onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Title Here" />
        <textarea id="review" name="review" placeholder="Review Here"></textarea>
            
        <label id="rating-label">What do you rate this movie/episode out of 10?</label>
        <input type="range" id="overall-rating" name="rating" min="0" max="10" />

        <input className="btn" id="save-review" type="submit" value="Save My Review" />
      </form>

      <h3>Your Reviews</h3>
      {reviews.length > 0 && (
        <div id="reviews-container">
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="prev-review">
                <h3 className="prev-review-title">{review.title}</h3>
                <p className="prev-review-text">{review.text}</p>
                <p className="prev-review-rating">Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}