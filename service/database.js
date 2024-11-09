const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
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

async function addPersonalReview(review) {
    const fullReview = {
        title: review.title,
        text: review.text,
        rating: review.rating
    };
    
    await personalReviewCollection.insertOne(fullReview);
}

async function addRecentReview(review) {
    const partialReview = {
        title: review.title,
        text: review.text,
    };
    
    await recentReviewCollection.insertOne(partialReview);
}