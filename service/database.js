const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const personalReviewCollection = db.collection('reviews');
const recentReviewCollection = db.collection('recentReviews');

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

async function updateRating(review, userRating) {
    if (review.currRating === "No rating yet!") {
        newRating = userRating;
    } else {
        newRating = (review.currRating + userRating) / 2;
    }
    
    const updatedRecentReview = {
        ...review,
        currRating: newRating
    };

    await recentReviewCollection.replaceOne({ title: review.title }, updatedRecentReview);
}

async function getRecentReviews() {
    const reviews = await recentReviewCollection.find().sort({ createdAt: -1 }).limit(3).toArray();
    console.log(reviews);
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
    getRecentReviews
}