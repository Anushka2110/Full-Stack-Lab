const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

var amount;
const server = http.createServer((req, res) => {
 
  //updateWeb(res, 'Slot Machine\n', 200);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine.\n');

  var urlParse =  url.parse(req.url, true);
  //console.log(urlParse.pathname);
  var queryData = urlParse.query;
  this.amount = queryData.amount;
  

  if(urlParse.pathname === '/play'){
     
      console.log('playing...amount :' + this.amount);
  }
  else if (urlParse.pathname === '/spin') {
      console.log('spinning..');
      if(amount === 'max')
      {
          console.log('Jackpot!!!'); 
         
      }
      else
      {
          console.log('amount lost:' + this.amount);
      }
    
      this.amount = 0;
  }
  else {
      console.log('Please play or spin.');
      this.amount = 0;
  }

  function updateWeb(res, message, statusCode) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Slot Machine\n');
  }
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});