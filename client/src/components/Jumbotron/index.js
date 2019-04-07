import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", color: "white", backgroundImage: "url(./images/books-shelves-architecture-wood-442420.jpg)"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
