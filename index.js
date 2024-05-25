const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Hello world...")
})

let PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server started at port number ${PORT} \n http://localhost:3000`)
})

