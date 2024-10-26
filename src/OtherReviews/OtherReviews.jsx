import React from 'react';
import './OtherReviews.css';

export function OtherReviews() {
  const [review1, setIsRated1] = React.useState(false);
  const [review2, setIsRated2] = React.useState(false);
  const [review3, setIsRated3] = React.useState(false);

  const handleRating1 = (event) => {
    event.preventDefault();
    setIsRated1(true);
  }

  const handleRating2 = (event) => {
    event.preventDefault();
    setIsRated2(true);
  }

  const handleRating3 = (event) => {
    event.preventDefault();
    setIsRated3(true);
  }
  
  return (
    <main>
        <h3 id="main-page-title">Find Movie Reviews Here!</h3>
        <form className="search-container">
          <input type="text" id="search-bar" name="search" placeholder="Find a Review..." />
          <input className="btn" id="search-for-reviews" type="submit" value="Search" />
        </form>

        <div id="recent-reviews">
          <div id="recent-review-1">
            <label className="review-title">Title for Recent Review #1 Here</label>
            <textarea className="review-text" id="recent-review-1-text" name="review" placeholder="Most recent review will be here"></textarea>
                        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-1" name="rating" min="0" max="10" />
            <input className="btn" id="submit-review-rating" type="button" value="Submit" />
                        
            <label>Current rating:</label>
            <input onClick={handleRating1} className="current-rating" type="text" id="current-rating-1" name="rating" placeholder="Current rating here" readOnly />
          </div>
            
          <div id="recent-review-2">
            <label className="review-title">Title for Recent Review #2 Here</label>
            <textarea className="review-text" id="recent-review-2-text" name="review" placeholder="Second most recent review will be here"></textarea>
                        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-2" name="rating" min="0" max="10" />
            <input onClick={handleRating2} className="btn" id="submit-review-rating" type="button" value="Submit" />
        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-2" name="rating" placeholder="Current rating here" readOnly />
          </div>
            
          <div id="recent-review-3">
            <label className="review-title">Title for Recent Review #3 Here</label>
            <textarea className="review-text" id="recent-review-3-text" name="review" placeholder="Third most recent review will be here"></textarea>
        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-3" name="rating" min="0" max="10" />
            <input onClick={handleRating3} className="btn" id="submit-review-rating" type="button" value="Submit" />
        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-3" name="rating" placeholder="Current rating here" readOnly />
          </div>
        </div>
    </main>
  );
}