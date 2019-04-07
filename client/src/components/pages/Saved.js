import React, { Component } from "react";
import API from "../../utils/API";
import SavedResults from "../../components/SavedResults";



class Saved extends Component {
  state = {

    results: [],

  };

  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => {

        this.loadBooks();


      })
      .catch(err => {
        console.log(err);

      })

  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {

    API.getBooks()
      .then(res =>
        this.setState({ results: res.data })



      )


      .catch(err => console.log("Error occurred"));
  };


  render() {
    console.log("IN RENDER " + this.state.results);

    return (
      <div>
        <h3>Saved Books</h3>
        {this.state.results.length ?
          (<SavedResults results={this.state.results}
            button1Text="View"
            button2Text="Delete"
            button2Action={this.deleteBook} />
          ) : (
            <h3> No Results to Display</h3>
          )}


      </div>
    );
  }
}


export default Saved;