const express = require('express');
const app = express();
const dbConnection = require('../../../db');
const colors = require('colors');
const shape = require('shape-json');
//All Services Here
app.get('/api/users', function (req, res) {
    dbConnection.query('SELECT * FROM users', function (error, users, fields) {
        if (error) throw error;
        res.json({
            users
        });
    });
});

app.post('/api/users/add', function (req, res) {
    console.log(req.body);
    dbConnection.query('INSERT INTO users SET ?', req.body, function (error, results, fields) {
        if (error) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'error to save data'
                }
            })
        }

        res.json({
            ok: true,
            category: results
        })
    });

});

module.exports = app;
