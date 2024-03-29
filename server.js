
// init project
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Establish a connection with the Mongo Database
// Get the username, password, host, and databse from the .env file
const mongoDB = ("mongodb+srv://"+
                 process.env.USERNAME+
                 ":"
                 +process.env.PASSWORD+
                 "@"
                 +process.env.HOST+
                 "/"
                 +process.env.DATABASE);
console.log(mongoDB);
console.log("mongodb+srv://alawyah:<password>@cluster0.wdpbhei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
mongoose.connect(mongoDB, {retryWrites: true,appName:''});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine
app.set("view engine", "ejs")
app.set("views", __dirname + "/views/");

// Load routes
const apiRouter = require("./routes/api");
const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use("/api/book", apiRouter);

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
