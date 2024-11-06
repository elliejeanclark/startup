import React from 'react';
import './OtherReviews.css';

export function OtherReviews() {
  const [ratings, setRatings] = React.useState([]);
  React.useEffect(() => {
    const fetchRatings = async () => {
      for (let i = 0; i < 3; i++) {
        try {
          const response = await fetch('/api/ratings?reviewID=${i}');
          if (response.ok) {
            const data = await response.json();
            setRatings(oldRatings => {
              const newRatings = [...oldRatings];
              newRatings[i] = data.rating;
              return newRatings;
            });
          }
        } catch (error) {
          console.error('Error fetching ratings:', error);
        }
      }
    };

    fetchRatings();

  }, []);

  const updateRating = async (reviewID, newRating) => {
    try {
      const response = await fetch('/api/otherReviews/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({ reviewID, newRating }),
      });

      if (response.ok) {
        const data = await response.json();
        setRatings(oldRatings => {
          const newRatings = [...oldRatings];
          newRatings[reviewID] = data.updatedRating;
          return newRatings;
        });
      }
    } catch (error) {
      console.error('Error updating rating:', error);
    }
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
            <input className="btn" id="submit-review-rating" type="button" value={buttonLabel1} onClick={updateRating} disabled={review1} />
                        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-1" name="rating" placeholder="Current rating here" readOnly />
          </div>
            
          <div id="recent-review-2">
            <label className="review-title">Title for Recent Review #2 Here</label>
            <textarea className="review-text" id="recent-review-2-text" name="review" placeholder="Second most recent review will be here"></textarea>
                        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-2" name="rating" min="0" max="10" disabled={review2} />
            <input className="btn" id="submit-review-rating" type="button" value={buttonLabel2} onClick={updateRating} disabled={review2} />
        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-2" name="rating" placeholder="Current rating here" readOnly />
          </div>
            
          <div id="recent-review-3">
            <label className="review-title">Title for Recent Review #3 Here</label>
            <textarea className="review-text" id="recent-review-3-text" name="review" placeholder="Third most recent review will be here"></textarea>
        
            <label>What do you rate this review out of 10?</label>
            <input type="range" id="rating-3" name="rating" min="0" max="10" disabled={review3} />
            <input className="btn" id="submit-review-rating" type="button" value={buttonLabel3} onClick={updateRating} disabled={review3} />
        
            <label>Current rating:</label>
            <input className="current-rating" type="text" id="current-rating-3" name="rating" placeholder="Current rating here" readOnly />
          </div>
        </div>
    </main>
  );
}