import React from 'react';
import './reviewers.css';

import { ReviewEvent, reviewNotifier } from './reviewNotifier';

export function Reviewers(props) {
    const userName = props.userName;

    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        reviewNotifier.addHandler(handleReviewEvent);

        return () => {
            reviewNotifier.removeHandler(handleReviewEvent);
        };
    });

    function handleReviewEvent(event) {
        setEvents([...events, event]);
    }

    function createMessageArray(event) {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
            let message = 'unknown';
            if (event.type === ReviewEvent.review_written) {
                message = `${event.from} wrote a review!`;
            }

            messageArray.push(
                <div key={i} className='event'>
                    {message}
                </div>
            );
        }
        return messageArray;
    }

    return (
        <div className='reviewers'>
            <div id='reviewer-messages'>{createMessageArray()}</div>
        </div>
    );
}