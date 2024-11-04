let express=require('express');
var fs=require('fs');
const date=new Date();
console.log(date.getDate)
let app=express();

// example url==>localhost:3002/data?data=kumar.js&content="folder created"
app.get('/data',(req,res)=>{
    fs.appendFile(req.query.data,req.query.content,(err)=>{if(err)throw err;console.log("saved");})
    res.send(`<html><body><h1>file created successfully</h1></body></html>`)
})
app.listen(3002,()=>{"server is working"})

