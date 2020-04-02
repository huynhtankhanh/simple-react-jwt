const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

//config
dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true }, () => {
    console.log('connected to db');
});

//middle ware
app.use(express.json());

//Router middle ware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => console.log("Hello, server is running"));