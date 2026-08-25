import http from "http";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
    const text = await readFile("big.txt", "utf-8");

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(text);
});

server.listen(3000, () => {
    console.log("Server is running...");
});