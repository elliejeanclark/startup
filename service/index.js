const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

let recentReviewRatings = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

//Json body parser
app.use(express.json());

// Adding cookie parser to the express app
app.use(cookieParser());

// Serve static content
app.use(express.static('public'));

//Trust headers from proxy
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
        res.status(409).send({ msg: 'That username is already taken'});
    } else {
        const user = await DB.createUser(req.body.username, req.body.password);
        
        //Set cookie
        res.cookie('token', user.token, { httpOnly: true });
        console.log("account created")

        res.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    try {
        const user = await DB.getUser(req.body.username);
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.cookie('token', user.token, { httpOnly: true });
            res.send({ token: user.token });
            console.log("User logged in");
            return;
        }
        res.status(401).send({ msg: 'Invalid username or password' });
    } catch {
        res.status(401).send({ msg: 'Invalid username or password' });
    }
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req,res) => {
    res.clearCookie('token');
    res.status(204).end();
});

// Get old ratings
apiRouter.get('/otherReviews/oldRatings', async (req, res) => {
    const recentReviews = await DB.getRecentReviews();
    
    const recentReview1 = recentReviews[0];
    const recentReview2 = recentReviews[1];
    const recentReview3 = recentReviews[2];

    const rating1 = recentReview1.currRating;
    const rating2 = recentReview2.currRating;
    const rating3 = recentReview3.currRating;

    const ratings = [rating1, rating2, rating3];
    res.send(ratings);
})

// Update/Post Ratings for Recent Reviews
apiRouter.post('/otherReviews/ratings', async (req, res) => {
    const recentReviews = await DB.getRecentReviews();
    const review = recentReviews[req.body.reviewID];
    const userRating = req.body.newRating;
    const token = req.body.token;

    console.log(token);

    let newRating;
    
    if (review.currRating === "No rating yet!") {
        newRating = userRating;
    } else {
        newRating = (review.currRating + userRating) / 2;
    }

    DB.updateRating(token, review, newRating);
    res.send({ updatedRating: newRating });
});

// Get Rated By
apiRouter.post('/otherReviews/ratedBy', async (req, res) => {
    const reviewTitle = req.body.reviewTitle;
    const ratedBy = await DB.getRatedBy(reviewTitle);
    res.send(ratedBy);
})

// Get Recent Reviews
apiRouter.get('/otherReviews/reviews', async (req, res) => {
    const recentReviews = await DB.getRecentReviews();
    res.send(recentReviews);
});

// Save my review
apiRouter.post('/myReviews/post', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (token) {
        const reviewTitle = req.body.reviewTitle;
        const reviewText = req.body.reviewText;
        const reviewRating = req.body.reviewRating;
    
        const fullReview = { reviewTitle, reviewText, reviewRating };
        await DB.addPersonalReview(token, fullReview);

        const partialReview = { reviewTitle, reviewText };
        await DB.addRecentReview(partialReview);
        
        res.status(204).end();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
});

// Get my reviews
apiRouter.get('/myReviews/get', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    const reviews = await DB.getPersonalReviews(token) || [];
    res.send(reviews);
});

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup Service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});