const http = require('http');
const url  = require('url');

//module.exports is used to export this file as a module. This is why we could import ///controller.js in server.js using const server = require('./controller.js')
module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if (('/sample' == reqUrl.pathname || '/' == reqUrl.pathname ) && 'GET' === req.method) {
        console.log('Request Type : ' +
            req.method + ' EndPoint : ' +
            reqUrl.pathname);

            service.sampleRequest(req, res);
    } else if ('/send-msg' == reqUrl.pathname && 'POST' === req.method ) {
        console.log('Request Type : ' +
            req.method + ' EndPoint : ' +
            reqUrl.pathname);
        
            service.sendMsgRequest(req, res);
    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        service.invalidRequest(req, res);
    }
});