const http = require('http');

// create an HTTP server
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  // Send message as the response
  res.end('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
