var express=require('express');
var app=express();
const port=3000;
app.get('/',(req,res) =>{
    res.send('hey This is Harshita');
});
app.listen(port)