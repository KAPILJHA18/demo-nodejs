const express = require('express');
const genres = require('../routes/genres')
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rentals = require("../routes/rental");
const User = require('../routes/user')
const auth = require('../routes/auth')

module.exports = function(app){
    app.use(express.json());
    app.use(`/api/genres` , genres)
    app.use("/api/customers", customers);
    app.use("/api/movies", movies);
    app.use("/api/rentals", rentals);
    app.use('./api/users', User)
    app.use('./api/auth', auth)
} 