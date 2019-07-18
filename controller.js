const http = require('http');
const url  = require('url');

//module.exports is used to export this file as a module. This is why we could import ///controller.js in server.js using const server = require('./controller.js')
module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if ((reqUrl.pathname == '/sample' || reqUrl.pathname == '/' ) && req.method === 'GET') {
        console.log('Request Type : ' +
            req.method + ' EndPoint : ' +
            reqUrl.pathname);

            service.sampleRequest(req, res);
    }
});