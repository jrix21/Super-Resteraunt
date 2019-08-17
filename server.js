var express = require("express");
var path = require("path")
var app = express();
var PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var makeReservation = [];
var waitList = [];
app.post("/api/makeReservation", function (req, res){
    res.send()
});
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.listen(PORT, function(){
  console.log("app listening on PORT" + PORT);
});