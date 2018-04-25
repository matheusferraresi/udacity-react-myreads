import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  static = {
    book: PropTypes.object.isRequired,
    books: PropTypes.object.isRequired,
    shelfChanger: PropTypes.func.isRequired
  }
  render() {
    const { book, books, shelfChanger} = this.props

    let currentShelf = 'none';

    for(let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf
        break;
      } 
    }

    return(
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
    )
  }
}

export default ShelfChanger