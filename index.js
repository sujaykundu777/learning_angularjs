//creating a node express server to host the angularjs app
const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
    });

    var port = process.env.PORT || 3000;
    app.listen(port);
    
    // Render some console log output
    console.log("Listening on port " + port);