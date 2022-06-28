const http = require('http');

// create the server

const Server = http.createServer(function(req,res){
    res.write("<h1>This is My Server</h1>")
    res.write("\n Hii dost")
    res.write(JSON.stringify({NAME:"Rahul"}))
    res.end("\n  First sever ");
})

Server.listen(7000)