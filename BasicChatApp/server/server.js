const io= require('socket.io')(3000);
const users = {};
io.on("connection",socket=>{
    socket.on("new-joined",name=>{
        users[socket.id] = name;
        socket.broadcast.emit("user-joined",name);
    });
    socket.on("send-message",_message=>{
        socket.broadcast.emit("receive", { message: _message, name: users[socket.id]})
    });
})
