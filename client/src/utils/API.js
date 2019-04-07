import axios from "axios";
const url = 'https://www.googleapis.com/books/v1/volumes?q=';


export default {
  searchBooks: function (query) {
    return axios.get(`${url}${query}`)
  },

  
  // Gets all books
  getBooks: function() {
    console.log("About to post get request to api/books")
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("In saveBook function bookData" + JSON.stringify(bookData));
    return axios.post("/api/books", bookData);
  }

  
};
