const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('Welcome to home page')
        res.end()
    } else if(req.url === '/about'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('Welcome to About page')
        res.end()
    } else if(req.url === '/contact'){
        console.log(res.writeHead(200,{'content-type': 'text/plain'})); 
        res.write('Welcome to Contact page')
        res.end()
    } else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write( `<h1>Oops..!Page not found</h1>
        <a href='/'>Back to home</a>`)
        res.end()
    }
})

server.listen(5000);