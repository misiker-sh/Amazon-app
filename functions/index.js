/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Initialize Firebase app globally:
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51NzauhAA6qHiVuwm6wXsUM8Iv9pXqmzDhE1jXDyV1Xb6CJyCxx3lbvywW0lrCtXrJJCkn2yyiSYr4QX6mEj1Np1V00OR9NBhLt');
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
currency: "usd",
    });

    // OK - Created
    response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    });
});
// listen command
exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/clone-9784c/us-central1/api