require('./config');
const express = require('express');
const dbConnection = require('./db');
const bodyParser = require('body-parser');
const colors = require('colors');
const path = require('path');
const app = express();

//Index
app.use(express.static(path.resolve(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require('./app/api.routes'));
dbConnection.query('SELECT 1', function (error, results, fields) {
    if (error) throw error;
    let threadId = dbConnection.threadId.toString().cyan;
    console.log('connected as id ' + threadId);
});
app.listen(process.env.PORT, () => {
    let port = (process.env.PORT).toString().yellow;
    console.log(`Listening on ${port}`);
});

