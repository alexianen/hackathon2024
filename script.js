const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading the HTML file');
      } else {
        res.end(data);
      }
    });
  } else if (req.url === '/style.css') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.readFile(path.join(__dirname, 'style.css'), 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading the CSS file');
      } else {
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});