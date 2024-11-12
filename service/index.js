const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

let recentReviews = {};
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
        res_.status(409).send({ msg: 'That username is already taken'});
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
            res.send({ id: user._id });
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
    console.log('In index.js logoutAuth');
    res.clearCookie('token');
    res.status(204).end();
});

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
apiRouter.post('/myReviews/post', async (req, res) => {
    const user = await DB.getUserByToken(req.headers['authorization'].split(' ')[1]);
    console.log("User exists, saving review");

    if (user) {
        const reviewTitle = req.body.reviewTitle;
        const reviewText = req.body.reviewText;
        const reviewRating = req.body.reviewRating;
    
        const fullReview = { reviewTitle, reviewText, reviewRating };
        await DB.addPersonalReview(user, fullReview);

        recentReviews[2] = recentReviews[1];
        recentReviews[1] = recentReviews[0];
        recentReviews[0] = { reviewTitle, reviewText };
        
        res.status(204).end();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
});

// Get my reviews
apiRouter.get('/myReviews/get', async (req, res) => {
    const user = await DB.getUserByToken(req.headers['authorization'].split(' ')[1]);
    const reviews = await DB.getPersonalReviews(user) || [];
    res.send(reviews);
});

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup Service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});