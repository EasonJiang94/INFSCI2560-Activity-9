// Data Model for instances of books
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema(
  {
    book: {type: Schema.Types.ObjectId, ref: "Book", required: true},
    imprint:{type: String, required: true},
    status: {type: String, required: true, enum:["Available", "Loaned"]},
    due_back: {type: Date, default: Date.now}
  }
);

BookInstanceSchema
.virtual("url")
.get(function(){
  return "/catalog/bookinstance/" + this._id;
});

// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);