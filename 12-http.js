const http = require('http');

const server = http.createServer((req,res)=>{    
    switch(req.url){
        case '/':
            res.end('welcome to home page ');
            break;        
        case '/about':
            res.end('the about page section');
            break;
        default:
            res.end('page not found');
            break;
    }
    //res.end(`<h1>Page Not Found !!!</h1>`);
});

server.listen(5000) 