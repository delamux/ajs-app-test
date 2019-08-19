const express = require('express');
const app = express();
const connection = require('../../../db');
const colors = require('colors');
const shape = require('shape-json');
//All Services Here
app.get('/api/users', function (req, res) {
    connection.query('SELECT * FROM users', function (error, users, fields) {
        if (error) throw error;
        res.json({
            users
        });
    });

});

module.exports = app;
