const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let recentReviews = {};
let recentReviewRatings = [];
let myReviews = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res_) => {
    console.log('Creating user', req.body.username);
    
    const user = users[req.body.username];
    console.log('User exists:', Boolean(user));

    if (user) {
        res_.status(409).send({ msg: 'That username is already taken'});
    } else {
        const newUser = { username: req.body.username, password: req.body.password, token: uuid.v4() };
        users[newUser.username] = newUser;
        console.log('User created:', newUser);

        res_.send({ token: newUser.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res_) => {
    console.log('Logging in user', req.body.username);

    const user = users[req.body.username];
    if (user) {
        if (req.body.password === user.password) {
            user.token = uuid.v4();
            res_.send({ token: user.token });
            return;
        }
    }
    res_.status(401).send({ msg: 'Invalid username or password' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req,res) => {
    console.log('Logging Out user', req.body.username);

    const user = Object.values(users).find(user => user.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});

function authenticate(req, res, next) {
    const token = req.headers['authorization'];
    const user = Object.values(users).find(user => user.token === token);

    if (!user) {
        return res.status(401).send({ msg: 'Unauthorized' });
    }

    req.user = user;
    next();
}

// Get Ratings on Recent Reviews
apiRouter.get('/ratings', (req, res) => {
    console.log('Getting ratings for recent review', +req.query.reviewID);

    const reviewID = +req.query.reviewID;

    if (reviewID < 0 || reviewID > 2) {
        return res.status(400).send({ msg: 'Invalid review ID' });
    }

    const currentRating = recentReviewRatings[reviewID];

    res.send({ rating: currentRating || 'No rating yet, be the first to rate this review!' });
});

// Update/Post Ratings for Recent Reviews
apiRouter.post('/otherReviews/ratings', (req, res) => {
    console.log('Updating ratings for recent review', +req.body.reviewID);

    const reviewID = +req.body.reviewID;
    const userRating = req.body.newRating;

    if (reviewID < 0 || reviewID > 2) {
        return res.status(400).send({ msg: 'Invalid review ID' });
    }

    const oldRating = recentReviewRatings[reviewID] || 0;
    const newRating = (oldRating + userRating) / 2;

    recentReviewRatings[reviewID] = newRating;

    res.send({ updatedRatgin: newRating });
});

// Save my review
apiRouter.post('/myReviews', authenticate, (_req, res) => {
    console.log('Saving my review', req.body.review_title);

    const review_title = req.body.review_title;
    const review_body = req.body.review_body;
    const review_rating = req.body.review_rating;

    myReviews[userId] = { review_title, review_body, review_rating };
    recentReviews[2] = recentReviews[1];
    recentReviews[1] = recentReviews[0];
    recentReviews[0] = { review_title, review_body };
    
    res.status(204).end();
});

// Get my reviews
apiRouter.get('/myReviews', authenticate, (_req, res) => {
    console.log('Getting my reviews', req.user.username);

    res.send(myReviews);
});

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup Service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});