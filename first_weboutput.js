// first program to be run in the web page 


let http = require('http')


http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("This is my first webpage response")
    res.end()//to show the last response 
}).listen(8080) //listen is used to mention the port number