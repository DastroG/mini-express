const http = require('http');

function myExpress() {
  const routes = {
    GET: {},
    POST: {},
  };

  const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    const handler = routes[method][url];

    if (handler) {
      handler(req, res);
    } else {
      res.statusCode = 404;
      res.end('404 Not Found');
    }
  });


  server.getCallPar = function (path, callback) {
    routes.GET[path] = callback;
  };


  server.postCallPar = function (path, callback) {
    routes.POST[path] = callback;
  };


  server.suno = function (port) {
    server.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  };

  return server;
}

module.exports = myExpress();
