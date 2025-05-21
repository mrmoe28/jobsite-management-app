// Vercel serverless function to handle all requests
import { createServer } from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Set up paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Serve static files (your frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Handle API routes (will be replaced by real API endpoints)
app.use('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// For all other routes, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Create HTTP server
const server = createServer(app);

// Listen on the provided port or default to 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export for Vercel serverless function
export default app;