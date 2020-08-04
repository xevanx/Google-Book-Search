import React, { Component } from "react";
import { BooksList, BooksListItem } from "../components/BooksList";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        bookSearch: "",
    };

    searchChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    makeNewItem = (item) => {
        let newItem = {};

        newItem.title = item.volumeInfo.title;
        newItem.authors = item.volumeInfo.authors.toString().replace(/,/g, ', ');
        newItem.description = item.volumeInfo.description || "No description provided";
        newItem.image = item.volumeInfo.imageLinks.thumbnail;
        newItem.url = item.volumeInfo.infoLink;
        newItem.id = item.id;

        this.setState ({ books: [...this.state.books, newItem] });
    };

    searchSubmit = event => {
        event.preventDefault();

        this.setState({ books: [] })

        API
        .getBooks(this.state.bookSearch)
        .then(res => res.data.forEach((item) => this.makeNewItem(item)))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className="card" id="searchCard">
                    <h5 className="card-title m-3">Book Search</h5>
                    <div className="form-group m-3">
                        <input
                        onChange={this.searchChange}
                        className="form-control"
                        id="bookSearch"
                        name="bookSearch"
                        value={this.state.bookSearch}
                        placeholder="Enter Title or Author Here"
                        type="text" />
                        <button type="button" className="btn btn-primary my-3 float-right" onClick={this.searchSubmit}>Search</button>
                    </div>
                </div>
                <br />
                <div className="card mb-3" id="resultsCard">
                    <h5 className="card-title m-3">Results</h5>
                    {!this.state.books.length ? (
                        <h5 className="text-center">Sorry, no results can be found!<br /><br /></h5>
                        ) : (
                        <BooksList>
                            {this.state.books.map(book => {
                                return (
                                    <BooksListItem
                                    key={book.id}
                                    title={book.title}
                                    url={book.url}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image} />
                                    );
                                })}
                        </BooksList>
                    )}
                </div>
            </div>
        );
    }
}

export default Search;