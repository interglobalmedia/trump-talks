const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let index = require('./routes/index');

app.use('/', index);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ...`);
})