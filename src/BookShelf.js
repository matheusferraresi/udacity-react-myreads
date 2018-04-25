import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static PropTypes = {
    books: PropTypes.object.isRequired,
    booksFromShelf: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  }

  render() {
    const { books, booksFromShelf, shelfChanger } = this.props

    return (
      <ol className="books-grid">
        {
          booksFromShelf.map((book) => (
            <Book
              book={ book }
              key={ book.id }
              shelfChanger={ shelfChanger }
              books={ books }
            />
          ))
        }
      </ol>
    )
  }
}

export default BookShelf