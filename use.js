const c = require('./myexpress.js');

c.getCallPar('/', function(req, res) {
  res.end('Home Page');
});

c.postCallPar('/login', function(req, res) {
  res.end('Login Page');
});

c.suno(8000);


