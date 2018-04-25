import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import ShelfChanger from './ShelfChanger';
import SearchBooks from './SearchBooks';

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  }

  state = {
    hasShelfChanged: false
  }

  // TODO: filter when theres no author / no cover image

  render() {
    const { book, books, shelfChanger } = this.props
    const thumb = book.imageLinks.smallThumbnail

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover"
              style={{ backgroundImage: `url(${thumb})` }}>
            </div>
            <ShelfChanger
              book={ book }
              books={ books }
              shelfChanger={ shelfChanger }
            />
          </div>
          <div className="book-title">{ book.title }</div>
          {
            book.authors &&
              book.authors.map((author, index) => (
                <div className="book-authors" key={ index }>{author}</div>
              ))
          }
        </div>
      </li>
    )
  }
}

export default Book