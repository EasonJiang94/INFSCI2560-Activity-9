const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./DBconnect');
require('dotenv').config();

// Connect to the DB
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");

// Load routes
const apiRouter = require("./routes/api");
const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use("/api/book", apiRouter);

// Listen for requests
const listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

