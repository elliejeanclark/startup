const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let recentReviews = [];
let otherReviewRatings = {};
let myReviews = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res_) => {
    const user = users[req.body.username];
    if (user) {
        res_.status(409).send({ msg: 'That username is already taken'});
    } else {
        const user = { username: req.body.username, password: req.body.password, token: uuid.v4() };
        users[user.username] = user;

        res_.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res_) => {
    const user = users[req.body.username];
    if (user) {
        if ([req.body.password === user.passowrd]) {
            user.token = uuid.v4();
            res_.send({ token: user.token });
            return;
        }
    }
    res_.status(401).send({ msg: 'Invalid username or password' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req,res) => {
    const user = Object.values(users).find(user => user.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});

// Get Ratings on Recent Reviews

// Update/Post Ratings for Recent Reviews

// Save my review
apiRouter.post('/myReviews', (req, res) => {
    const review_title = req.body.review_title;
    const review_body = req.body.review_body;
    const review_rating = req.body.review_rating;

    myReviews[review_title] = { review_title, review_body, review_rating };
    recentReviews[2] = recentReviews[1];
    recentReviews[1] = recentReviews[0];
    recentReviews[0] = { review_title, review_body, review_rating };
});

// Get my reviews
apiRouter.get('/myReviews', (req, res) => {
    res.send(myReviews);
});

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup Service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});