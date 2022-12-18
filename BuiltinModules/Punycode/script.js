const punycode = require('punycode');
const str = 'mañana';
const encoded = punycode.encode(str);
console.log(encoded);
const decoded = punycode.decode(encoded);
console.log(decoded);
// To Unicode
console.log(punycode.toUnicode(str));
// To ASCII
console.log(punycode.toASCII(str));