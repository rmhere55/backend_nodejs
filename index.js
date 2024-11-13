const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const userRouter = require('./routes/user'); // Import the router here correctly
const { connectMongoDb } = require('./connection');
const { logReqres } = require('./middleware');
const app = express();
const port = 8000;

// const userSchema = require('./db');
// require('dotenv').config();
// const { connectMongoDb } = require('./connection');

// Use the DB variable from .env
connectMongoDb("mongodb://127.0.0.1:27017/piyush_gargh_yt");


// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    req.myusername = "RAJ LAXMI";
    next();
});
app.use(logReqres);

// Router setup
app.use('/user', userRouter); // Use the userRouter correctly here

app.listen(port, () => console.log(`Server is ready on port ${port}`));
