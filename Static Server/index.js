const static = require("node-static");
const file = new static.Server("./public",{caches: 4000});
require("http")
  .createServer(function (request, response) {
    console.log(request);
    request
      .addListener("end", function () {
        file.serve(request, response,(e)=>{
            if(e && (e.status === 404)){
                file.serveFile('/404.html', 404, {}, request, response);
            }
        });
      })
      .resume();
  })
  .listen(8000);
