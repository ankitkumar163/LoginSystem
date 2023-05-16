const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean();
    if (!user) return res.status(400).send('Invalid email or password2');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password1');

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

router.post('/signup', async(req, res) => {
    try{
        console.log('Yes', req.body)
        return res.status(200).send('Request accepted');

    } catch (error){
        console.log('***Captured in signup***', error);
        res.status(500).send('Server error')
    }
});

module.exports = router;
