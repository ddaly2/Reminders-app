const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

var tasks = [];

app.get("/", function(req, res){
     
     let day = date.getDate();

     res.render("list", {kindOfDay: day, newTasks: tasks});
});

app.post("/", function(req, res){
     var task = req.body.task;
     tasks.push(task);
     res.redirect("/");
})

app.listen(3000, function(req, res){
     console.log("Server is running on port 3000");
});

