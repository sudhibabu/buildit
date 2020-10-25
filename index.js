var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Praveena Sudeer Teja....Hi there! I\'m being served from ' + os.hostname())
  res.end()
}

http.createServer(handleRequest).listen(3000)
