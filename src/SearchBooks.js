import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {

  state = {
    query: '',
    searchResults: [],
    searchError: false
  }

  searchBooks = (e) => {
    const query = e.target.value
    this.setState({ query: query })
    
    if (query) {
      BooksAPI.search(query)
        .then((books) => (
          books.length > 0
          ? this.setState({ searchResults: books, searchError: false })
          : this.setState({ searchResults: [], searchError: true})
        ));
    } else {
      this.setState({searchResults: [], searchError: false})
    }
  }

  render() {
    const { books, shelfChanger } = this.props
    const { query, searchResults, searchError } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.searchBooks }
            />
          </div>
        </div>
        <div className="search-books-results">
            {searchResults.length > 0 && (
              <div>
                <h3>Search returned { searchResults.length } books</h3>
                <ol className="books-grid">
                {searchResults.map((book) => (
                  <Book
                    book={ book }
                    books={ books }
                    key={ book.id }
                    shelfChanger={ shelfChanger }
                  />
                ))}
                </ol>
              </div>
            )}
          {searchError && 
            <div>
              <h3>Search returned 0 books. Please try a different keyword. </h3>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks