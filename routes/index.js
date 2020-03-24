// Route handlers
const express = require('express');
const router = express.Router()

//import data models
const Book = require("../models/book");

// RETREIVE all books
router.get("/", function(req,res){
  Book.find({}, function (err, book_list){
    res.render("index", {books:book_list});
  });
});
router.get("/add", function(req,res){
  res.render("add")
});

module.exports = router;