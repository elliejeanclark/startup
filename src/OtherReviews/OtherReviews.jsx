import React from 'react';
import './OtherReviews.css';

export function OtherReviews() {
  const [newRatings, setNewRatings] = React.useState([0, 0, 0]);
  const [buttonLabels, setButtonLabels] = React.useState(["Submit Rating", "Submit Rating", "Submit Rating"]);
  const [disabledReviews, setDisabledReviews] = React.useState([false, false, false]);

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

  const updateRating = async (reviewID) => {
    try {
      const response = await fetch('/api/otherReviews/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({ reviewID, newRating: newRatings[reviewID] }),
      });

      if (response.ok) {
        const data = await response.json();
        setDisabledReviews(prev => {
          const updated = [...prev];
          updated[reviewID] = true; // Disable after submitting
          return updated;
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
        {[0, 1, 2].map(id => (
          <div key={id} id={`recent-review-${id + 1}`}>
            <label className="review-title">Title for Recent Review #{id + 1} Here</label>
            <textarea className="review-text" id={`recent-review-${id + 1}-text`} name="review" placeholder="Most recent review will be here" readOnly />
  
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
              value={buttonLabels[id]} 
              onClick={() => updateRating(id)} 
              disabled={disabledReviews[id]} 
            />
  
            <label>Current rating:</label>
            <input 
              className="current-rating" 
              type="text" 
              id={`current-rating-${id + 1}`} 
              name="rating" 
              placeholder="Current rating here" 
              readOnly 
            />
          </div>
        ))}
      </div>
    </main>
  );

}