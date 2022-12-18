const socket = io(`http://localhost:3000`,{ transports: ['websocket'] });
const container  = document.getElementById('message-area');
const form = document.getElementById('messageForm');
const userMessage = document.getElementById('message');
const appendMessage = (message)=>{
    const messageElement = document.createElement('div');
    const classes = ["border","border-1","p-3","rounded-2","border-warning","d-flex","mb-3"]
    messageElement.classList.add(...classes);
    messageElement.innerText = message;
    container.appendChild(messageElement);
};
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const message = userMessage.value;
    appendMessage(`You: ${message}`);
    socket.emit("send-message",message);
    userMessage.value = "";
});
socket.emit("new-joined",name);
socket.on("user-joined",(name)=>{
    appendMessage(`${name} joined the chat`);
});
socket.on("receive",(mesg)=>{
    appendMessage(`${mesg.name}: ${mesg.message}`);
});