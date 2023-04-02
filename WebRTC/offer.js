const offer = {
  type: "offer",
  sdp: "v=0\r\no=- 8178014418068184797 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 56574 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 172.18.0.1\r\na=candidate:109401006 1 udp 2122260223 172.18.0.1 56574 typ host generation 0 network-id 1\r\na=candidate:2921517098 1 udp 2122194687 172.20.0.1 49533 typ host generation 0 network-id 2\r\na=candidate:120630963 1 udp 2122129151 172.19.0.1 44515 typ host generation 0 network-id 3\r\na=candidate:2945920311 1 udp 2122063615 172.21.0.1 35011 typ host generation 0 network-id 4\r\na=candidate:1778703883 1 udp 2122000639 2401:4900:463b:4a9b:cd75:c106:d19b:13c3 49567 typ host generation 0 network-id 6 network-cost 10\r\na=candidate:1555794055 1 udp 2121932543 192.168.156.230 42100 typ host generation 0 network-id 5 network-cost 10\r\na=candidate:4163864378 1 tcp 1518280447 172.18.0.1 9 typ host tcptype active generation 0 network-id 1\r\na=candidate:1351091390 1 tcp 1518214911 172.20.0.1 9 typ host tcptype active generation 0 network-id 2\r\na=candidate:4187650599 1 tcp 1518149375 172.19.0.1 9 typ host tcptype active generation 0 network-id 3\r\na=candidate:1363016099 1 tcp 1518083839 172.21.0.1 9 typ host tcptype active generation 0 network-id 4\r\na=candidate:2494433951 1 tcp 1518020863 2401:4900:463b:4a9b:cd75:c106:d19b:13c3 9 typ host tcptype active generation 0 network-id 6 network-cost 10\r\na=candidate:2719046675 1 tcp 1517952767 192.168.156.230 9 typ host tcptype active generation 0 network-id 5 network-cost 10\r\na=ice-ufrag:mX2h\r\na=ice-pwd:c4ujU8PJrSGvTN7EnpyTm5IB\r\na=ice-options:trickle\r\na=fingerprint:sha-256 4E:4D:02:8F:BA:CC:A9:B1:D7:A5:ED:85:0C:D6:7C:5D:AD:EE:16:E6:74:84:64:69:62:B7:5D:13:95:5F:28:AB\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"
};

const rc = new RTCPeerConnection();
rc.onicecandidate = (e) =>
  console.log("New ICE candidate " + JSON.stringify(rc.localDescription));
rc.ondatachannel = (e) => {
  rc.dc = e.channel;
  rc.dc.onmessage = (e) => {
    console.log("New message " + e.data);
  };
};

rc.setRemoteDescription(offer).then(() => {
  console.log("Offer set");
});

rc.createAnswer()
  .then((a) => {
    rc.setLocalDescription(a);
  })
  .then(() => {
    console.log("Answer created");
  });
