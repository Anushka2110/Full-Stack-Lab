var http = require('http');
var store = require('./store');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});

  if(req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    res.end('No data found');
  }

  else if(req.url === '/api/favoritebook') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var bookStore = store.booksModule;
    var favBook = 'Favorite Book: ' + bookStore.favoriteBook().title + ' - Author: ' + bookStore.favoriteBook().author;
    console.log(favBook);

    res.end(JSON.stringify(favBook));
  }
  else if(req.url === '/api/getbooks') {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var books = store.booksModule.getBookRecommendations();
    console.log(books);

    res.end(JSON.stringify(books));
  }
  else if(req.url === '/api/getvideos') { 
    res.writeHead(200, { 'Content-Type': 'application/json'});

    var videos = store.videosModule.getVideos();
    console.log(videos);

    res.end(JSON.stringify(videos));
  }
  else {
        // request not found, send back 404
        var errorMessage = 'Error - page not found';
        res.writeHead(404, errorMessage);
        res.end(errorMessage);
  }
  
}).listen(1337, '127.0.0.1');