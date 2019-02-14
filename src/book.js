import React from "react";

class Book extends React.Component {
  state = { bookInfo: false };

  display = () => {
    this.setState(
      this.state.bookInfo ? { bookInfo: false } : { bookInfo: true }
    );
  };

  render() {
    let info;
    if (this.state.bookInfo) {
      info = (
        <div>
          <h2>{this.props.book.subtitle}</h2>
          <p>Description</p>
          <p>{this.props.book.description}</p>
          <h3>Author: {this.props.book.author}</h3>
          <ul>
            <li>Pages: {this.props.book.pages}</li>
            <li>Publisher: {this.props.book.publisher}</li>
            <li>Published: {this.props.book.published}</li>
          </ul>

          <a href={this.props.book.website}>Web Site</a>
        </div>
      );
    }
    return (
      <div className="container">
        <h1 onClick={this.display}>{this.props.book.title}</h1>
        {info}
      </div>
    );
  }
}

export default Book;
