import React, { Component } from 'react';
import BookCard from './Bookcard'
import { getState } from 'redux';

class Books extends Component {
  render() {
      const stateProps = this.props.store.getState();
      const bookItems = stateProps.books.map((book) =>
      <BookCard key={book} stateProps = { stateProps } />
    );
    return (
        <div className="books-container">
          {bookItems}
        </div>
    );
  }
}

export default Books;