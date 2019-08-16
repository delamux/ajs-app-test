const express = require('express');
const app = express();

//All Services Here
app.use(require('./components/user/userService'));

module.exports = app;
