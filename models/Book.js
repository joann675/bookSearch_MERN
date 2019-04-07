const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const BookSchema = new Schema({
  // `headline` is required and of type String. It must be unique
  title: {
    type: String,
    index: {unique: true, dropDups: true},
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  
  description: {
    type: String
  },
  image: {
    type: String
    

  },
  link: {
    type: String

  }


});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;
