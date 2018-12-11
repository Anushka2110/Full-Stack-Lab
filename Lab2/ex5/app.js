const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine\n');
  var handlerequest= req.url;
  if(handlerequest==="/play"){
    console.log("playing...");
  }
  else if(handlerequest==="/spin"){
    console.log("spinning...");

  }
  else{
    console.log("play or spin");
  }
  
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
  
        
});

