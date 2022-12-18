const videoArea = document.getElementById("videoArea");
const socket = io("http://localhost:5000",{transport: ['websocket']});
const peer = new Peer(undefined, {
  host: 'localhost',
  port: 9000,
  path: '/myapp'
});
let videoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    const videoElement = document.createElement("video");
    appendVideoStream(videoElement, stream);
    peer.on(
      "call",
      call=> {
        call.answer(stream);
        const videoElement = document.createElement("video");
        call.on("stream", (remoteStream)=>{
          appendVideoStream(videoElement, remoteStream);
        });
      }
    );
    socket.on("user-connected", (userId) => {
      newUserConnect(userId, stream);
    });
  });
peer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

function newUserConnect(userId, stream) {
  const call = peer.call(userId, stream);
  const videoElement = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    appendVideoStream(videoElement, userVideoStream);
  }, (err) => {
    console.log(err);
  });
  call.on('close', (e) => {
    console.log(e);
  })
}

function appendVideoStream(element, stream) {
  element.srcObject = stream;
  element.addEventListener("loadedmetadata", () => {
    element.play();
  });
  videoArea.append(element);
}
