const fs = require('fs');

// READ STREAM

const stream = fs.createReadStream('relativePath');
// const stream = fs.createReadStream('relativePath', { encoding: 'utf8' });

stream.on('data',(data)=>{
  console.log(data);  // Buffer (chunks of data) would be printed, to print the string use toString() method.
});

// WRITE STREAM

const stream = fs.createWriteStream('relativePath');

stream.on('data',(data)=>{
  stream.write("Data to be written");
});

// PIPING THROUGH STREAMS

readstream.pipe(writestream);  // It will pass the chunks to the writestream and will be written :)  ,  in case of serving data on the browser writestream would be the response
