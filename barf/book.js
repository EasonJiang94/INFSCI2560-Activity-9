// Data Model for Books
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
  }
);

// Export model
module.exports = mongoose.model("book", BookSchema);