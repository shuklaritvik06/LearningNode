// Simple server using http module

//   res.setHeader('Content-Type','text/plain');

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
  let path = "./parent";
  switch(req.url){
    case '':
      path+='';
      break;
    case '':
      path+='';
      break;
    case '':
      path+='';
      break;
    case '':
      path+='';   
      break;
    case '':
      res.setHeader('Location','/redirectURL');
      res.end();
    default:
      path+='';
  }
  fs.readFile(path,(err,data)=>{
    if(err){
      res.end();
    }
    else{
      res.write(data);
      res.end();
    }
  });
});
server.listen(8000,'localhost',()=>{
  console.log("listening at port 8000");
})
