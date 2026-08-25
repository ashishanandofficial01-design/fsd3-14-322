import http from "http";
const server = http.createServer((req, res) => {
    if (req.url === "/product") {
        res.end("<h1>Product Page</h1>");
    } else if (req.url === "/cart") {
        res.end("<h1>Cart</h1>");
    } else if (req.url === "/checkout") {
        res.end("<h1>Checkout</h1>");
    } else {
        res.statusCode = 404;
        res.end(`
            <h1>404 Not Found</h1>
            <h2>Page Not Found</h2>
        `);
    }
});

server.listen(4444, () => {
    console.log("Server is running on port 4444");
});