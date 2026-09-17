import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const port = 4090;

const app = express();

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

// Serve HTML/CSS/JS files from the public folder
app.use(express.static(path.join(dirname, "frontend")));

app.use((req, res) => {
  res.status(404).sendFile(path.join(dirname, "frontend", "404.html"));
});

app.listen(port,()=>console.log("Server is running on PORT 4090",port));