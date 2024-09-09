const express = require('express');
// const cors = require('cors');
const Quote = require('inspirational-quotes');

const app = express();

// app.use(cors());

app.get('/' ,(req ,res) => {
    res.send(Quote.getQuote());
})

app.listen(5000 ,() => {
    console.log("listening....");
});