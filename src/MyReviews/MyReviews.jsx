import React from 'react';
import './MyReviews.css';

export function MyReviews( { reviews = [], handleSubmit, getReviews, reviewTitle, setReviewTitle, reviewText, setReviewText}) {
  const [dadJoke, setDadJoke] = React.useState('');

  React.useEffect(() => {
    getReviews();
  }, []);

  React.useEffect(() => {
    const fetchJoke = async () => {
      try{
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' }
        });
        
        if(response.ok) {
          const data = await response.json();
          setDadJoke(data.joke);
        } else {
          console.error('Error getting joke:', response.statusText);
        }
      } catch (error) {
        console.error('Error getting joke:', error);
      }
    };
    
    fetchJoke();
  }, []);
  
  return (
    <main>
      <h1>My Reviews</h1>

      <p id="generated-dad-joke">{dadJoke || "Getting Dad Joke..."}</p>
        
      <form id="my-review" onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" placeholder="Title Here" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
        <textarea id="review" name="review" placeholder="Review Here" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
            
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
                <h3 className="prev-review-title">{review.reviewTitle}</h3>
                <p className="prev-review-text">{review.reviewText}</p>
                <p className="prev-review-rating">Rating: {review.reviewRating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}