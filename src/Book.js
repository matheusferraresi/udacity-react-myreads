import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired
  }

  state = {
    hasShelfChanged: false
  }

  // TODO: filter when theres no author / no cover image

  render() {
    const { book, books, shelfChanger } = this.props
    const thumb = book.imageLinks.smallThumbnail
    
    let currentShelf = 'none';

    for(let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf
        break;
      } 
    }

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover"
              style={{ backgroundImage: `url(${thumb})` }}>
            </div>
            <div className="book-shelf-changer">
              <select 
                defaultValue={currentShelf}
                onChange={(e) => shelfChanger(e.target.value, book) }>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
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