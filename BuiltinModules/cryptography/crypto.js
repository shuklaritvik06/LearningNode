const crypto = require("crypto");

// Hashing Data

const hash = crypto.createHash("sha256");
hash.update("Hello, world!");
hash.update("Hello, nodejs!");
console.log(hash.digest("hex"));

// Encrypting
const algorithm = "aes-192-cbc";
const password = "Password used to generate key";
const key = crypto.scryptSync(password, "salt", 24);
const iv = Buffer.alloc(16, 0); // Initialization vector.
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
// Decrypting
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
