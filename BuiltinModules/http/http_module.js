const http = require('http');
const server = new http.Server();
console.log(http.STATUS_CODES)
// server.on('request', (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// }).listen(5000, 'localhost');
// console.log('Server running at http://localhost:5000/');
const httpServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req.headers)
    console.log(req.statusCode);
    console.log(req.url);
    console.log(req.method);
    res.write("Hello\n");
    res.end('World\n');
});
console.log(http.STATUS_CODES);
console.log(http.METHODS);
httpServer.listen(5000, 'localhost');
