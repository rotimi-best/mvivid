	
const { PRIVATE_ACCESS_KEY } = process.env;
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const access_token = req.header('x-auth-token') || req.query.access_token || req.body.access_token;

  if (!access_token) {
    return res.status(401).json({ error: true, message: 'Authorization token needed' });
  }

  jwt.verify(access_token, PRIVATE_ACCESS_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: true, message: 'Unauthorized user' });
    }

    req.decoded = decoded;

    next();
  })
};