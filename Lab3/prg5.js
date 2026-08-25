import http from 'http';
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    const product={
        name:"  Mobile", 
        price:50000,
        discount:"10%",
        company:"Apple"
    };
    res.end(JSON.stringify
        (product));
});
server.listen(4000,()=>console.log("Server is running..."));