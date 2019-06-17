var express=require('express');
var app=express();
const port=3000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb");
  
        app.post('/go',()=>{

            var myobj = { name: "Company Inc", address: "Highway 37" };
            
            {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            }
        })
});




app.get('/',(req,res) =>{
    res.send('hey This is Harshita');
});
app.listen(port,()=>{
    console.log('Server is running on port ',port);
})