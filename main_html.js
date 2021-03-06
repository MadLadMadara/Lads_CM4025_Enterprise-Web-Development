var http = require("http");
const fs = require('fs');

const server = http.createServer(function (req, res) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Send the response body as "Hello World"
    fs.createReadStream('mywebpage.html').pipe(res);
});

server.listen(process.env.PORT || 8000);
// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');