// Learnt from nodejs docs

const tls = require("node:tls");
const https = require("node:https");
const crypto = require("node:crypto");

function sha256(s) {
  return crypto.createHash("sha256").update(s).digest("base64");
}
const options = {
  hostname: "github.com",
  port: 443,
  path: "/",
  method: "GET",
  checkServerIdentity: function (host, cert) {
    const err = tls.checkServerIdentity(host, cert);
    if (err) {
      return err;
    }
    console.log(cert);
    do {
      console.log("Subject Common Name:", cert.subject.CN);
      console.log("  Certificate SHA256 fingerprint:", cert.fingerprint256);

      hash = crypto.createHash("sha256");
      console.log("  Public key ping-sha256:", sha256(cert.pubkey));

      lastprint256 = cert.fingerprint256;
      cert = cert.issuerCertificate;
    } while (cert.fingerprint256 !== lastprint256);
  },
};

const req = https.request(options, (res) => {
  console.log("All OK. Server matched our pinned cert or public key");
  console.log("statusCode:", res.statusCode);
  console.log("headers:", res.headers);
  res.on("data", (d) => {});
});

req.on("error", (e) => {
  console.error(e.message);
});
req.end();
