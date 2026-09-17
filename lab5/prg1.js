import exprees from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';
const PORT = 3090;
const app = exprees();

const filename=fileURLToPath(import.meta.url);// refernce of root folder
const dirname=path.dirname(filename)// store the address of project folder 

app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname,"public","index.html"));//projectfolder/public/index.html
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(dirname,"public","about.html"));
});
app.get("/enquiry",(req,res)=>{
    res.sendFile(path.join(dirname,"public","enquiry.html"));
});
app.listen(PORT, () => console.log("...........Server is running on PORT 3090..........",PORT));