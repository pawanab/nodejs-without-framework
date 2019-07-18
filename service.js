const url = require('url');

exports.sampleRequest = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  name = 'World';
  if (reqUrl.query.name) {
      name = reqUrl.query.name;
  }
  var response = {
      "text" : "Hello! " + name
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};

exports.sendMsgRequest = function (req, res) {
  body = '';
  // to get the post body from request
  //it comes in form of stream
  req.on('data', function (chunk) {
      body += chunk;
  });

  // this function will execute only after stream is completed and full post body is received.
  req.on('end', function(){
      postBody = JSON.parse(body);
      var response = {
          "text" : "Name is " + postBody.value + " from " +  postBody.city
      };

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(response));
  });
};

exports.invalidRequest = function (req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Invalid Request'); 
};