const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, {
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
});
const db = client.db('startup');
const userCollection = db.collection('users');
const personalReviewCollection = db.collection('reviews');
const recentReviewCollection = db.collection('recentReviews');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(username) {
    return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
    //hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: hashedPassword,
        token: uuid.v4()
    };
    await userCollection.insertOne(user);

    return user;
}

async function addPersonalReview(token, review) {
    const reviewWithToken = {
        ...review,
        token: token
    }
    await personalReviewCollection.insertOne(reviewWithToken);
}

function getPersonalReviews(token) {
    return personalReviewCollection.find({ token: token }).toArray();
}    

async function addRecentReview(review) {
    const partialReview = {
        ...review,
        currRating: "No rating yet!",
        createdAt: new Date()
    };
    
    await recentReviewCollection.insertOne(partialReview);
}

async function updateRating(token, review, newRating) { 
    await recentReviewCollection.updateOne(
        { reviewTitle: review.reviewTitle },
        {
            $set: { currRating: newRating },
            $addToSet: { ratedBy: token }
        }
    );
}

async function getRatedBy(reviewTitle) {
    const review = await recentReviewCollection.findOne({ reviewTitle: reviewTitle });
    return review.ratedBy;
}

async function getRecentReviews() {
    const reviews = await recentReviewCollection.find().sort({ createdAt: -1 }).limit(3).toArray();
    return reviews;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addPersonalReview,
    getPersonalReviews,
    addRecentReview,
    updateRating,
    getRatedBy,
    getRecentReviews
}