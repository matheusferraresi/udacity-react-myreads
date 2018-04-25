  /*
    Used to mount shelves, receive books then call Book Class and mount one LI per book
  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {

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