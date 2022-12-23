
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = 4000;

const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/api', postRoute);


app.get('/', (req, res) => {
    res.send('Welcome to Mieang karm Management!!');
});

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database connected successfully!!');
})

app.listen(PORT);
