{
  /*
    Used to mount shelves, receive books then call Book Class and mount one LI per book
  */
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  render() {
    return (
      <ol className="books-grid">
        <li>
          SHELF
        </li>
      </ol>
    )
  }
}

export default BookShelf