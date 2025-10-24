const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Arthur’s Express.js API!');
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
