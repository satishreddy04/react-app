import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    return (
        <div>
          <h2>BookCard  sample</h2>
          <img style={{width: 250, height: 323}} src={this.props.stateProps.cover} />
        <h2>{this.props.stateProps.title}</h2>
        <h3>{this.props.stateProps.author}</h3>
       
        </div>
    );
  }
}

export default BookCard;