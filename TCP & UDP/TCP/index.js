const net = require('node:net');
const server = net.createServer(socket => {
    socket.write('hello\n');
    socket.on('data', data => {
        console.log(data.toString());
    })
    socket.on('error', err => {
        console.log(err);
    })
});
server.listen(5000);