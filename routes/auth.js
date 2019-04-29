const { PRIVATE_ACCESS_KEY, PRIVATE_REFRESH_KEY } = process.env;
// const debug = require('debug')('/users');
const express = require('express');
// const CryptoJS = require("crypto-js");
// const bcrypt = require('bcrypt-nodejs');
// const jwt = require('jsonwebtoken');
// const { getUserData } = require('../../Db/userData.js');
// const { addUserSession, deleteUserSession } = require('../../Db/userSession.js');
// const { CONSTANTS: { AUTH } } = require('../../helpers/constants');
// const { genRandNum, len, log } = require('../../modules');
const router = express.Router();

// @route GET api/users/login
// @route Login user
// @access Private
router.post('/login', async (req, res) => {
  const { username = "", password = "" } = req.body;

  if (!len(username) || !len(password)) {
    debug('Username and password was not given');

    return res.status(400).json({ error: true, message: 'Username and password required' });
  }

  try {
    // Find user by username
    getUserData({ username })
      .then(userData => {
        // Check if user found
        if (!userData) {
          return res.status(404).json({ error: true, message: 'User not found' });
        }

        const passwordBytes  = CryptoJS.AES.decrypt(password, PRIVATE_ACCESS_KEY);
        const decryptedPassword = passwordBytes.toString(CryptoJS.enc.Utf8);

        try {
          // Check if password is valid
          bcrypt.compare(decryptedPassword, userData[0].password, (err, valid) => {
            // Password is correct
            if (!err && valid) {
              const [{ _id, username, fullname, role }] = userData;

              const payload = { _id, username };
              const expiresIn = genRandNum(AUTH.MIN_SEC, AUTH.MAX_SEC);

              // Sign Token
              const accessToken = jwt.sign(payload, PRIVATE_ACCESS_KEY, { expiresIn })
              const refreshToken = jwt.sign(payload, PRIVATE_REFRESH_KEY);

              addUserSession({
                userId: _id,
                username,
                accessToken,
                refreshToken,
              }).then(session => log(`\nSession added ${session}`));

              res.json({
                success: true,
                access_token: accessToken,
                refresh_token: refreshToken,
                expires_in: expiresIn,
                token_type: "bearer",
                user_details: {
                  username,
                  fullname,
                  role
                }
              });
            } else {
              return res.status(400).json({ error: true, message: 'Password incorrect' });
            }
          })
        } catch (error) {
          debug(`Error in api/users/login in comparing passwords ${error}`);

          return res.status(500).json({ error: true, message: 'An error occured, now on a coffee break' });
        }
      })
  } catch (error) {
    debug(`Error in api/users/login in finding user ${error}`);

    return res.status(500).json({ error: true, message: 'An error occured, on a coffee break ;)' });
  }
});

// @route GET api/users/logout
// @route Logout user
// @access Private
router.post('/logout', async (req, res) => {
  const { username, refresh_token } = req.body;

  if (!username || !refresh_token) {
    return req.status(400).json({ error: true, message: 'User id and token needed' });
  }

  deleteUserSession({ username, refreshToken: refresh_token })
    .then(user => {
      if (!user.result.n) {
        return res.status(404).json({ error: false, message: 'Invalid user' });
      }

      res.json({ success: true });
    });
});

module.exports = router;