
//
// const express= require("express");
// const bodyParser = require("body-parser");
//
// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
//
// app.get("/", function(req,res){
//   res.sendFile(__dirname + "/bmiCalculator.html");
// });
//
// app.post("/", function(req,res){
//
// var weight= Number(req.body.n1);
// var height= Number(req.body.n2);
//
// var result=weight/(height*height);
//
//   res.send("the result of the calculation is:  " + result);
// });
//
// app.listen(3000,function(){
//   console.log("server is running on port , 3000");
// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile (__dirname + "/index.html");
});

app.post("/", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);

    res.send("Your BMI is  " + bmi);
});

app.listen(5500, function(){
    console.log("port started at 5500");
});
