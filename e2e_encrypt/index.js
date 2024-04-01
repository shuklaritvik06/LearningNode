const crypto = require("crypto");

// Create ECDH key pairs for Alice and Bob
const alice = crypto.createECDH("secp256k1");
alice.generateKeys();
const bob = crypto.createECDH("secp256k1");
bob.generateKeys();

// Get the public keys of Alice and Bob
const alicePub = alice.getPublicKey().toString("base64");
const bobPub = bob.getPublicKey().toString("base64");

// Display public keys
console.log("Alice's Public Key:", alicePub, "\nBob's Public Key:", bobPub);

// Compute shared secrets between Alice and Bob using ECDH
const aliceShared = alice.computeSecret(bobPub, "base64", "hex");
const bobShared = bob.computeSecret(alicePub, "base64", "hex");

// Display shared secrets
console.log(
  "Alice's Shared Secret:",
  aliceShared,
  "\nBob's Shared Secret:",
  bobShared
);

// Encrypt using shared secret with AES256
const aes256 = require("aes256");
const encrypted = aes256.encrypt(aliceShared, "Hello BRO!!!");

// Display encrypted message
console.log("Encrypted Message:", encrypted);

// Decrypt encrypted message using Bob's shared secret
console.log("Decrypted Message:", aes256.decrypt(bobShared, encrypted));

// Generate random Initialization Vector (IV)
let IV = crypto.randomBytes(16);

// IV

console.log("IV: ", IV.toString("hex"));

// Create AES-GCM cipher
const cipher = crypto.createCipheriv(
  "aes-256-gcm",
  Buffer.from(aliceShared, "hex"),
  IV
);

// Encrypt data using AES-GCM cipher
let encrypted_cipher = cipher.update("Hello Bro", "utf-8", "hex");
encrypted_cipher += cipher.final("hex");

// Get the authentication tag
const auth_tag = cipher.getAuthTag().toString("hex");

// Combine IV, encrypted data, and authentication tag into payload
let payload = IV.toString("hex") + encrypted_cipher + auth_tag;

// Display payload encoded in base64
console.log(
  "Base64 Encoded Payload:",
  Buffer.from(payload, "hex").toString("base64")
);

payload = Buffer.from(payload, "hex").toString("base64");

// Extract IV and authentication tag from the received payload
const receivedPayload = Buffer.from(payload, "base64").toString("hex");

// Payload in HEX
console.log("Hex Encoded Payload:", receivedPayload);

const receivedIV = receivedPayload.substring(0, 32);
const receivedEncryptedData = receivedPayload.substring(
  32,
  receivedPayload.length - 32
);
const receivedAuthTag = receivedPayload.substring(receivedPayload.length - 32);

// Log IV, Auth Tag, Data
console.table([receivedIV, receivedEncryptedData, receivedAuthTag]);

// Create decryption cipher with shared secret and received IV
const decryptionCipher = crypto.createDecipheriv(
  "aes-256-gcm",
  Buffer.from(bobShared, "hex"),
  Buffer.from(receivedIV, "hex")
);

// Set the authentication tag
decryptionCipher.setAuthTag(Buffer.from(receivedAuthTag, "hex"));

// Decrypt the encrypted data
let decryptedData = decryptionCipher.update(
  receivedEncryptedData,
  "hex",
  "utf-8"
);
decryptedData += decryptionCipher.final("utf-8");

// Display decrypted data
console.log("Decrypted Data:", decryptedData);
