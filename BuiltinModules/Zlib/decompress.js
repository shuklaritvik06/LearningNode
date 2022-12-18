// Decompress
const zlib = require('zlib');
const fs = require('fs');
const unzip = zlib.createUnzip();
const input = fs.createReadStream('input.zip');
const output = fs.createWriteStream('input2.txt'); 
input.pipe(unzip).pipe(output);