const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let recentReviews = {};
let recentReviewRatings = [];
let myReviews = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res_) => {
    console.log('Creating user', req.body.username);
    
    const user = users[req.body.username];

    if (user) {
        res_.status(409).send({ msg: 'That username is already taken'});
    } else {
        const newUser = { username: req.body.username, password: req.body.password, token: uuid.v4() };
        users[newUser.username] = newUser;

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

// Get old ratings
apiRouter.get('/otherReviews/oldRatings', (req, res) => {
    const reviewID = +req.query.reviewID;
    if (!recentReviewRatings[reviewID]) {
        const oldRating =  "No Rating Yet!";
        recentReviewRatings[reviewID] = oldRating;
    }
    res.send({ rating: recentReviewRatings[reviewID] });
})

// Update/Post Ratings for Recent Reviews
apiRouter.post('/otherReviews/ratings', (req, res) => {
    const reviewID = +req.body.reviewID;
    const userRating = req.body.newRating;

    if (reviewID < 0 || reviewID > 2) {
        return res.status(400).send({ msg: 'Invalid review ID' });
    }

    const oldRating = recentReviewRatings[reviewID] || 0;
    if (oldRating === "No Rating Yet!") {
        const newRating = userRating;
        recentReviewRatings[reviewID] = newRating;
        res.send({ updatedRating: newRating });
    } else {
        const newRating = (oldRating + userRating) / 2;
        recentReviewRatings[reviewID] = newRating;
        res.send({ updatedRating: newRating });
    }
});

// Get Recent Reviews
apiRouter.get('/otherReviews/reviews', (req, res) => {
    const reviewID = +req.query.reviewID;
    if (!recentReviews[reviewID]) {
        const reviewTitle = "No Review Yet!";
        const reviewText = "Write a review to see it here!";
        recentReviews[reviewID] = { reviewTitle, reviewText };
    }
    res.send(recentReviews[reviewID]);
});

// Save my review
apiRouter.post('/myReviews/post', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    const user = Object.values(users).find(user => user.token === token);
    if (user) {
        const reviewTitle = req.body.reviewTitle;
        const reviewText = req.body.reviewText;
        const reviewRating = req.body.reviewRating;
    
        if (!myReviews[token]){
            myReviews[token] = [];
        }

        myReviews[token].push({ reviewTitle, reviewText, reviewRating});
        recentReviews[2] = recentReviews[1];
        recentReviews[1] = recentReviews[0];
        recentReviews[0] = { reviewTitle, reviewText };
        
        res.status(204).end();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
});

// Get my reviews
apiRouter.get('/myReviews/get', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    const reviews = myReviews[token] || [];
    res.send(reviews);
});

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup Service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});