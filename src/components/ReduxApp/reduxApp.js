import React, { Component } from 'react';
import BookList from '../../containers/book-list'


class ReduxApp extends Component {
  render() {
    return (
        <div>
         <BookList />
        </div>
    );
  }
}

export default ReduxApp;