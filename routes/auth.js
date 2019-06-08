const { PRIVATE_ACCESS_KEY, PRIVATE_REFRESH_KEY } = process.env;
const debug = require('debug')('/auth');
const express = require('express');
const CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const { addUser, getUser } = require('../db/methods/user');
const { len } = require('../modules');
const router = express.Router();

// @route POST api/auth/register
// @route Register a new user
// @access Private
router.post('/register', async (req, res) => {
  const user = req.body;
  
  console.log(req);

  if (!user.email || !user.password) {
    return res.status(400).json({ error: true, message: 'User id and password needed' });
  }

  const oldUser = await getUser({ email: user.email })
  
  console.log('Old user', oldUser);

  if (len(oldUser)) return res.status(400).json({ msg: 'User already exists' });

  bcrypt.hash(user.password, null, null, async (error, hashedPassword) => {
    if (error) {
      debug(`Error in api/auth/register in hasing password`, error);

      return res.status(400).json({ error: true, message: 'Error while saving creating user' });
    }
    console.log('hashed password', hashedPassword);

    user.password = hashedPassword;
    
    const newUser = await addUser(user);

    const expiresIn = `10 days`;

    // Sign Token
    const accessToken = jwt.sign({ _id: newUser._id }, PRIVATE_ACCESS_KEY, { expiresIn })
    const refreshToken = jwt.sign({ _id: newUser._id }, PRIVATE_REFRESH_KEY);

    res.json({
      success: true,
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn,
      token_type: "bearer",
      user_details: newUser
    });
  });
});

// @route POST api/auth/login
// @route Login user
// @access Private
router.post('/login', async (req, res) => {
  const { email = "", password = "" } = req.body;

  if (!len(email) || !len(password)) {
    debug('Email and password was not given');

    return res.status(400).json({ error: true, message: 'Email and password required' });
  }

  try {
    // Find user by email
    getUser({ email })
      .then(user => {
        // Check if user found
        if (!user) {
          return res.status(404).json({ error: true, message: 'User not found' });
        }
        console.log(user, password, user[0].password, password === user[0].password)
        // const passwordBytes  = CryptoJS.AES.decrypt(password, PRIVATE_ACCESS_KEY);
        // const decryptedPassword = passwordBytes.toString(CryptoJS.enc.Utf8);

        try {
          // Compare plain password with hash
          bcrypt.compare(password, user[0].password, (err, valid) => {
            // Password is correct
            if (!err && valid) {
              const [{ _id }] = user;

              const expiresIn = `2 days`;

              // Sign Token
              const accessToken = jwt.sign({ _id }, PRIVATE_ACCESS_KEY, { expiresIn })
              const refreshToken = jwt.sign({ _id }, PRIVATE_REFRESH_KEY);

              res.json({
                success: true,
                access_token: accessToken,
                refresh_token: refreshToken,
                expires_in: expiresIn,
                token_type: "bearer",
                user_details: user
              });
            } else {
              return res.status(400).json({ error: true, message: 'Incorrect Password' });
            }
          })
        } catch (error) {
          debug(`Error in api/auth/login in comparing passwords ${error}`);

          return res.status(500).json({ error: true, message: 'An error occured, now on a coffee break' });
        }
      })
  } catch (error) {
    debug(`Error in api/auth/login in finding user ${error}`);

    return res.status(500).json({ error: true, message: 'An error occured, on a coffee break ;)' });
  }
});

module.exports = router;