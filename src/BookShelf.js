  /*
    Used to mount shelves, receive books then call Book Class and mount one LI per book
  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static PropTypes = {
      books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return (
      <ol className="books-grid">
        {
          books.map((book) => (
            <Book
              book={ book }
              key={ book.id }
            />
          ))
        }
      </ol>
    )
  }
}

export default BookShelf