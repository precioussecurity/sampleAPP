const http = require('http');

// Define the server logic
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success code
  res.setHeader('Content-Type', 'text/plain');
  res.end('V2 - Hello, Achiever! This is a Node.js server.');
});

// Set the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
