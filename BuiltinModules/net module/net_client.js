const net = require('net'); 
const readline = require('readline'); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 
const client = net.createConnection({ port: 8000 }, () => { 
  client.write('CLIENT: Hello Server!'); 
});
client.on("data", (data) => {
    console.log(data.toString());
});
client.on('end', () => { 
  console.log('SERVER: Connection Closed!'); 
}) 
rl.on('line', (input) => { 
  client.write(`CLIENT: ${input}`); 
}); 