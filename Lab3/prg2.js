import http from "http";
const server = http.createServer((req, res) => {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Internal Server Error</h1>");
});
server.listen(4444, () => {
    console.log("Server is running on port 4444");
});