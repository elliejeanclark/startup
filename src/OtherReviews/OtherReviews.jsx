import React from 'react';
import './OtherReviews.css';

export function OtherReviews({ newRatings = [], setNewRatings, disabledReviews = [], oldRatings = [], recentReviews = [], updateRating, getRecentReviews, getOldRatings }) {
  
  React.useEffect(() => {
    getOldRatings();
    getRecentReviews();
  }, []);
  
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
              placeholder={disabledReviews[id] ? newRatings[id] : (oldRatings[id]?.rating || "No Rating Yet!")}
              readOnly 
            />
          </div>
        ))}
      </div>
    </main>
  );

}