let express = require("express");

let app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.listen (8084, function(){
    console.log("Servidor rodando na porta 8084")
})