import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
    console.log("method:", req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Products Details</h1>");
    } 
    
    else if (req.url === '/products' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');

        const stream = createReadStream("./data/products.json", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    } 
    
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(4444, () => {
    console.log("Program 10 is running on port 4444...");
});