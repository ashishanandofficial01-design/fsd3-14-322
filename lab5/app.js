import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});
app.get("/about", (req, res) => {
    res.send("We are FSD Developer");
});

app.post('/login',(req,res)=>{
    res.send({msg:'USER LOGIN'})
})
app.put('/user/update/1',(req,res)=>{
    res.send({msg:'USER UPDATE'})
})
app.delete('users/1',(req,res)=>{
    res.send({msg:'Remove User 1'})
})

app.use((req,res)=>{
    res.status(404).send("Not Found")
})

app.listen(3000, () => console.log("...........Server is running on PORT 3000.........."));
// server.on("error", (err) => console.error("Server error:", err));