require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const colors = require('colors');
const shape = require('shape-json');
const path = require('path');
const app = express();

//Index
app.use(express.static(path.resolve(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require('./app/api.routes'));

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    let threadId = connection.threadId.toString().cyan;
    console.log('connected as id ' + threadId);
});
connection.end();
app.listen(process.env.PORT, () => {
    let port = (process.env.PORT).toString().yellow;
    console.log(`Listening on ${port}`);
});

