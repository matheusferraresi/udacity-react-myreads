import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf'

class BookShelves extends Component {

  render() {
    const { books } = this.props
    const shelves = [
      { type: 'currentlyReading', title: 'Currently Reading' },
      { type: 'wantToRead', title: 'Want to Read' },
      { type: 'read', title: 'Read' }
    ]

    return (
      <div className="list-books-content">
        {console.log(this.props.books)}
        <div>
          {shelves.map((shelf, index) => {
            return(
              <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf.title }</h2>
                <div className="bookshelf-books">
                  <BookShelf /> { index }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BookShelves