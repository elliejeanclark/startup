import React from 'react';
import './OtherReviews.css';
import { ReviewEvent, reviewNotifier } from './reviewNotifier';

export function OtherReviews({ newRatings = [], setNewRatings, disabledReviews = [], setDisabledReviews, oldRatings = [], recentReviews = [], updateRating, getRecentReviews, getOldRatings, getRatedBy }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const reviews = await getRecentReviews(); // Wait for reviews to load
      console.log(reviews);
      await getOldRatings();

      const updatedDisabledReviews = [...disabledReviews];
      const token = localStorage.getItem('token');

      for (let i = 0; i < reviews.length; i++) { // Use fetched reviews directly
        console.log(reviews[i].reviewTitle);
        const ratedBy = await getRatedBy(reviews[i].reviewTitle);
        updatedDisabledReviews[i] = ratedBy.includes(token);
      }

      setDisabledReviews(updatedDisabledReviews);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <main>
      <h1 id="main-page-title">Find Movie Reviews Here!</h1>
  
      <div id="recent-reviews">
        {[0, 1, 2].map(id => (
          <div key={id} id={`recent-review-${id + 1}`}>
            <label className="review-title">{recentReviews[id]?.reviewTitle}</label>
            <textarea className="review-text" id={`recent-review-${id + 1}-text`} name="review" placeholder={recentReviews[id]?.reviewText} readOnly />
  
            <label>What do you rate this review out of 10?</label>
            <input 
              type="range" 
              id={`rating-${id + 1}`} 
              name="rating" 
              min="0" 
              max="10" 
              value={newRatings[id]} 
              onChange={(e) => setNewRatings(prev => {
                const updated = [...prev];
                updated[id] = Number(e.target.value);
                return updated;
              })}
              disabled={disabledReviews[id]} 
            />
            <input 
              className="btn" 
              id={`submit-review-rating-${id + 1}`} 
              type="button" 
              value="Submit Rating" 
              onClick={() => updateRating(id)} 
              disabled={disabledReviews[id]} 
            />
  
            <label>Current rating:</label>
            <input 
              className="current-rating" 
              type="text" 
              id={`current-rating-${id + 1}`} 
              name="rating"
              value={disabledReviews[id] ? newRatings[id] : (oldRatings[id] ?? "No rating yet!")}
              readOnly 
            />
          </div>
        ))}
      </div>
    </main>
  );

}