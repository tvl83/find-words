/**
 * Main server file for the e-commerce platform
 */

import express from 'express';
import path from 'path';
import routes from './routes';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use(routes);

// Home page route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Book eCommerce Platform'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 