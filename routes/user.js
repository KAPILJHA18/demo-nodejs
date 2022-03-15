const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash')
const mongoose = require('mongoose');
const express =  require('express');
const router = express.Router();


router.post('/me', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    const user = awaitUser.findOne({email: req.body.email})
    if (user) return res.status(400).send('user alreadyd registered');

    user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password 
    })
    user = new User(_.pick(req.body, [ 'name', 'email', 'password']))

    const salt = await bcrypt.genSalt(10); // default 10, callback
    user.password = await bcrypt.hash(user.password, salt);
    await user.save()

    // const token = jwt.sign({_id:user._id}, config.get('jwtPrivateKey'))
    const token = user.getAuthToken()
    res.header('x-auth-token', token).send( _.pick( user, ['_id','name', 'email']));
});

module.exports = router;