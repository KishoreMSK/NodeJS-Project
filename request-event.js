const http = require('http')

const server = http.createServer()

//request is a built in event name
server.on('request',(req,res) => {
    res.end('Welcome')
})

server.listen(5001) //when the port get started the 'server.on' gets the request and the callback function will execute