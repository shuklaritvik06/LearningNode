var buf = new Buffer([10, 20, 30, 40, 50]);   
console.log(buf); // <Buffer 0a 14 1e 28 32>
var hello = Buffer.alloc(8);
hello.write('hello', 'utf8');
console.log(hello); // <Buffer 68 65 6c 6c 6f>
console.log(hello.toString()); // hello
console.log(hello.toString('hex')); // 68656c6c6f
console.log(hello.toString('utf8', 0, 2)); // he
console.log(hello.toJSON()); // { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }
console.log(Buffer.concat([hello, hello]).toString()); // hellohello
console.log(Buffer.compare(hello, hello)); // 0
console.log(buf.length); // 5
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(65, 66, 67)); // ABC
console.log(String.fromCodePoint("0x72")); // A
console.log(Buffer.from("hello")); // <Buffer 68 65 6c 6c 6f>
console.log(hello.includes('hello')); // true
console.log(hello.indexOf('hello')); // 0
console.log(hello.lastIndexOf('hello')); // 0
for (key of hello.keys()) {
    console.log(key);
}