import express from "express";
import path from "path";
const app = express();

app.use(express.static("../dist"));

app.all("*", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.listen(2000,()=>{
    console.log('port 2000')
})