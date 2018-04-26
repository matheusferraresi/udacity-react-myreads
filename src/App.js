import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelves from './BookShelves'

class BooksApp extends React.Component {
  state = {
    books: [],
    hasShelfChanged: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })    
  }

  shelfChanger = (newShelf, book) => {
    BooksAPI.update(book, newShelf).then(_ => {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      }) 
    })
  }

  render() {
    const { books } = this.state
    
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            shelfChanger={ this.shelfChanger }
            books={ books }
          />
        )} />

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelves
              books={ books }
              shelfChanger={ this.shelfChanger }
            />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
