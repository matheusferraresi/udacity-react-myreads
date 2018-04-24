import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired
  }

  // TODO: filter when theres no author / no cover image

  render() {
    const { book } = this.props
    const thumb = book.imageLinks.smallThumbnail

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover"
              style={{ backgroundImage: `url(${thumb})` }}>
            </div>
            <div className="book-shelf-changer">
              <select>
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