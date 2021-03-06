import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf'

const BookShelves = ({ books, shelfChanger }) => {
  const shelves = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ]

  return (
    <div className="list-books-content">
      {shelves.map((shelf, index) => {
        const booksFromShelf = books.filter( book => book.shelf === shelf.type)

        return(
          <div className="bookshelf" key={ index }>
            <h2 className="bookshelf-title">{ shelf.title }</h2>
            <div className="bookshelf-books">
              <BookShelf
                booksFromShelf={ booksFromShelf }
                shelfChanger={ shelfChanger }
                books={ books }
              />
            </div>
          </div>
        )
      })}

    </div>
  )
}

BookShelves.PropTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired
}

export default BookShelves