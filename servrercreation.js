// program to create a server in our system

let http = require('http')

// creating a server
http.createServer(function (req, res){

    res.write("Testing my web server....")
    
    res.write("testing succes")
    res.end()

}).listen(4000);


