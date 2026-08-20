import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Welcome to Node.js");

    console.log("URL:");
    console.log(req.url);

    console.log("Request Method:");
    console.log(req.method);

    console.log("Request Headers:");
    console.log(req.headers);

    console.log("Socket Information:");
    console.log(req.socket);

    res.end("Hello");
});

const PORT = 4444;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});