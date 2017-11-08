//creating a node express server to host the angularjs app
const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
    });

app.listen(3000,function(){
 console.log("App running at port 3000");
 });