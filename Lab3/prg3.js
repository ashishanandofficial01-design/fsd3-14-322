azaimport http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1>Home Page</h1>");

    } else if (req.url === "/about") {
        res.end("<h1>About Page</h1>");

    } else if (req.url === "/product") {
        res.end(`
            <h1>Mobile Phones</h1>
            <h2>Price:50,000</h2>
            <p>Discount: 5%</p>
            <a href="#">Buy Now</a>
        `);

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