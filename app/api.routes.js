const express = require('express');
const app = express();
const path = require('path');

//All Services Here
app.use(require('./components/user/userService'));

module.exports = app;
