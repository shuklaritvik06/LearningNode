const lc = new RTCPeerConnection();
const dc = lc.createDataChannel("#channel");
dc.onmessage = (e) => console.log("Just got a message" + e.data);
dc.onopen = (e) => console.log("Opened Connection");
lc.onicecandidate = (e) =>
  console.log("New ICE candidate " + JSON.stringify(lc.localDescription));
lc.createOffer()
  .then((offer) => lc.setLocalDescription(offer))
  .then(() => {
    console.log("DONE!");
  });
