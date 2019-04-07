import React, { Component } from "react";
import API from "../../utils/API";

import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";



class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  saveBook = event => { 
    

    const thisBook = this.state.results.find(book => book.id === event.target.id);
    
    
    const dbBook = {
      title: thisBook.volumeInfo.title,
      authors: thisBook.volumeInfo.authors,
      description: thisBook.volumeInfo.description,
      image: thisBook.volumeInfo.imageLinks ? thisBook.volumeInfo.imageLinks.smallThumbnail : null,
      link: thisBook.volumeInfo.canonicalVolumeLink

    };

    
    API.saveBook(dbBook)
      .then(res => {
        console.log(res.status, res.statusText);

      })
      .catch(err => {
        console.log(err);

      })

  };




  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => {
        
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
        console.log(res);
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <h3>Book Search</h3>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}

        />
        <SearchResults results={this.state.results}
          button1Text="View"

          button2Text="Save" 
          button2Action={this.saveBook}/>


      </div>
    );
  }
}

export default Search;

