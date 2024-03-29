// Route handlers
const express = require('express');
const router = express.Router()

//import data models
const Book = require("../barf/book");

// RETREIVE all books

/*
router.get("/", async function(req,res){

await Book.find({},function (err, book_list){
    res.render("index.ejs", {books:book_list});
  });

});
*/

router.get('/', async (req,res) => {
  try {
    const data = await Book.find({});
    res.render("index.ejs",{books:data});
  } catch (err) {
    throw err;
  }
});

module.exports = router;