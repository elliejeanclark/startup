import React from 'react';
import './MyReviews.css';

export function MyReviews( { reviews = [], handleSubmit}) {
  const [quote, setQuote] = React.useState('');

  React.useEffect(() => {
    const fetchQuote = async () => {
      try{
        const response = await fetch('https://movie-quote-api.herokuapp.com/v1/quote/');
        
        if(response.ok) {
          const data = await response.json();
          setQuote(data.quote);
        } else {
          console.error('Error getting quote:', response.statusText);
        }
      } catch (error) {
        console.error('Error getting quote:', error);
      }
    };
    
    fetchQuote();
  }, []);
  
  return (
    <main>
      <h1>My Reviews</h1>

      <p id="generated-quote">{quote || 'Loading quote...'}</p>
        
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