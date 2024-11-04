let express=require('express');

let app=express();
app.get('/',(req,res)=>{res.send('hello world')})


app.patch("/",(req,res)=>{})


app.get('/about',(req,res)=>{res.send('this is working')})



