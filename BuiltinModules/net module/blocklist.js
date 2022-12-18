const net = require('net');
const blockList = new net.BlockList();
// block specific IP address
blockList.addAddress('12.13.13.13');
// block specific range of IP addresses
blockList.addRange('11.0.0.1', '11.0.0.10');
// block specific subnet
blockList.addSubnet('8592:757c:efae:4e45::', 64, 'ipv6');

console.log(blockList.check('12.13.13.13'));  
console.log(blockList.check('11.0.0.3'));  
console.log(blockList.check('222.111.111.222')); 

// IPv6 notation for IPv4 addresses works:
console.log(blockList.check('::ffff:7b7b:7b7b', 'ipv6'));
console.log(blockList.check('::ffff:123.123.123.123', 'ipv6'));