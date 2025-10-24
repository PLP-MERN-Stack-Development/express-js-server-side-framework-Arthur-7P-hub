// middleware/auth.js
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const VALID_KEY = process.env.API_KEY || 'mysecret123'; // fallback if no .env

  if (!apiKey || apiKey !== VALID_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }

  next();
};

module.exports = auth;
