import http from "http";
import { createReadStream } from "fs";
import { readFile } from "fs/promises";
const server = http.createServer(async (req, res) => {
    if (req.url === "/stream") {
        res.setHeader("Content-Type", "text/plain");
        const stream = createReadStream("big.txt", {
            encoding: "utf-8"
        });
        stream.pipe(res);
    }
    else if (req.url === "/normal") {
        const text =
            await readFile("big.txt", "utf-8");
        res.setHeader("Content-Type", "text/plain");
        res.end(text);
    }
    else if (req.url === "/product") {
        res.setHeader(
            "Content-Type",
            "text/html"
        );
        const data =
            await readFile(
                "product.html",
                "utf-8"
            );
        res.end(data);
    }
    else if (req.url === "/about") {
        res.setHeader(
            "Content-Type",
            "text/html"
        );
        const data =
            await readFile(
                "about.html",
                "utf-8"
            );
        res.end(data);
    }
    else if (req.url === "/contact") {
        res.setHeader(
            "Content-Type",
            "text/html"
        );
        const data =
            await readFile(
                "contact.html",
                "utf-8"
            );
        res.end(data);
    }
    else {
        res.statusCode = 404;
        res.setHeader(
            "Content-Type",
            "text/plain"
        );
        res.end("404 - Page Not Found");
    }
});
server.listen(3000, () => {console.log("Server running at http://localhost:3000");
});