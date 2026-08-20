import http from 'http';
const server=http.createServer();
server.on('request',(req,res)=>{
    res.end("<h1>Welcome to Server Side Programming</h1>");
});
server.listen(5000,()=>{
    console.log("Server is running");
});
    