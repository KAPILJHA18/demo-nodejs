const { user } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = awaitUser.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user alreadyd registered");

  const validPassword = bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("invalid email or Password");

//   const token = jwt.sign({_id:user._id}, config.get('jwtPrivateKey'))

const token = user.genrateAuthToken()

  res.send(token)
});

module.exports = router;

function validate(req) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(user, schema);
}
