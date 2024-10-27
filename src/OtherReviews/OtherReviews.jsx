import React from 'react';
import './OtherReviews.css';

export function OtherReviews() {
  const [review1, setIsRated1] = React.useState(false);
  const [buttonLabel1, setButton1Label] = React.useState("Submit");

  const [review2, setIsRated2] = React.useState(false);
  const [buttonLabel2, setButton2Label] = React.useState("Submit");

  const [review3, setIsRated3] = React.useState(false);
  const [buttonLabel3, setButton3Label] = React.useState("Submit");

  const handleRating1 = (event) => {
    event.preventDefault();
    const rangeVale = document.getElementById("rating-1").value;
    setButton1Label('You rated this review a ' + rangeVale);
    const currentRatingValue = document.getElementById("current-rating-1").value;
    document.getElementById("current-rating-1").value = rangeVale;
    setIsRated1(true);
  }

  const handleRating2 = (event) => {
    event.preventDefault();
    const rangeVale = document.getElementById("rating-2").value;
    setButton2Label('You rated this review a ' + rangeVale);
    const currentRatingValue = document.getElementById("current-rating-2").value;
    document.getElementById("current-rating-2").value = rangeVale;
    setIsRated2(true);
  }

  const handleRating3 = (event) => {
    event.preventDefault();
    const rangeVale = document.getElementById("rating-3").value;
    setButton3Label('You rated this review a ' + rangeVale);
    const currentRatingValue = document.getElementById("current-rating-3").value;
    document.getElementById("current-rating-3").value = rangeVale;
    setIsRated3(true);
  }
  
  return (
    <main>
        <h1 id="main-page-title">Find Movie Reviews Here!</h1>

        <div id="recent-reviews">
          <div id="recent-review-1">
            <label className="review-title">Title for Recent Review #1 Here</label>
            <textarea className="review-text" id="recent-review-1-text" name="review" placeholder="Most recent review will be here"></textarea>
                        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-1" name="rating" min="0" max="10" disabled={review1} />
            <input className="btn" id="submit-review-rating" type="button" value={buttonLabel1} onClick={handleRating1} disabled={review1} />
                        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-1" name="rating" placeholder="Current rating here" readOnly />
          </div>
            
          <div id="recent-review-2">
            <label className="review-title">Title for Recent Review #2 Here</label>
            <textarea className="review-text" id="recent-review-2-text" name="review" placeholder="Second most recent review will be here"></textarea>
                        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-2" name="rating" min="0" max="10" disabled={review2} />
            <input className="btn" id="submit-review-rating" type="button" value={buttonLabel2} onClick={handleRating2} disabled={review2} />
        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-2" name="rating" placeholder="Current rating here" readOnly />
          </div>
            
          <div id="recent-review-3">
            <label className="review-title">Title for Recent Review #3 Here</label>
            <textarea className="review-text" id="recent-review-3-text" name="review" placeholder="Third most recent review will be here"></textarea>
        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-3" name="rating" min="0" max="10" disabled={review3} />
            <input className="btn" id="submit-review-rating" type="button" value={buttonLabel3} onClick={handleRating3} disabled={review3} />
        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-3" name="rating" placeholder="Current rating here" readOnly />
          </div>
        </div>
    </main>
  );
}