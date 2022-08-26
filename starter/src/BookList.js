import React from 'react';
import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom";

const BookList = ({onShelfChange,books}) => {

    const booksCurrentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const booksWantToRead = books.filter(book => book.shelf === "wantToRead");
    const booksRead = books.filter(book => book.shelf === "read");
    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books={booksCurrentlyReading} bookshelfTitle={"Currently Reading"}
                                   onShelfChange={onShelfChange}/>
                        <Bookshelf books={booksWantToRead} bookshelfTitle={'Want to Read'}
                                   onShelfChange={onShelfChange}/>
                        <Bookshelf books={booksRead} bookshelfTitle={'Read'} onShelfChange={onShelfChange}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        </div>
    );
};

export default BookList;