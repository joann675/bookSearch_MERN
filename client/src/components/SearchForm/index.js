import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="booksearch">Book</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="title"
          type="text"
          className="form-control"
          placeholder="Type in a title of a book to begin"
          id="title"
        />
       
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
