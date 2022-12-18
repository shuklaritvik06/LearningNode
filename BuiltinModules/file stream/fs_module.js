// // Read-> 4 , Write-> 2, Execute-> 1

const fs = require("fs");

// // Read File (Sync)
// fs.readFileSync("fileName","utf8",(err,data)=>{
//    console.log(data);
//    fs.writeFileSync("fileName",data);
// })

// // Read File (Async)

// fs.readFile('relativePath',(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);  // Returns the Buffer, we can convert it to string using toString() method.
// });

// // Write To File

// fs.writeFile('relativePath','data',(err)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log("successfully wrote");
// });

// // Make Directory & Delete Directory

// if(!fs.existSync('relativePath')){
//   fs.mkdir('relativePath',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log("Successfully created directory");
//   });
// }
// else{
//   fs.rmdir('relativePath',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log("Successfully deleted directory");
//   });
// }

// // Delete a File

// if(fs.existSync('relativeFilePath')){
//   fs.unlink('relativePath',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log("Successfully deleted ");
//   });
// }

// // Rename a File

// if(fs.existSync('relativeFilePath')){
//   fs.rename('oldPath','newPath',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log("Successfully renamed ");
//   });
// }

// Change file permissions
fs.chmod("fs_module.js", 0777, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Successfully changed permissions");
});

// Change file ownership
fs.chown("fs_module.js", 0000, 0000, () => {
  console.log("Successfully changed owner");
});

// Change file stats
fs.stat("fs_module.js", (err, stats) => {
  if (err) {
    console.log(err);
  }
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
});

// Copy file
fs.copyFile("fs_module.js", "fs_module_copy.js", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Successfully copied");
});

fs.unlinkSync("fs_module_copy.js");
fs.copyFileSync("fs_module.js", "fs_module_copy.js");
// Delete file
fs.unlink("fs_module_copy.js", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Successfully deleted");
});
