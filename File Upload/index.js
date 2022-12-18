const http = require('http');
const fs = require('fs');
const httpServer = http.createServer();
httpServer.on('request', (req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync('./index.html'));
    }
    if(req.url === '/upload') {
        const filename = req.headers["file-name"];
        req.on("data",(data)=>{
            fs.appendFileSync(filename,data);
        });
        res.end("Read file successfully!")
    };
});
httpServer.listen(8000);