import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import BooksGrid from "./BooksGrid";
import * as BooksAPI from "./BooksAPI";


const SearchBooks = ({onShelfChange, fetchBooks}) => {
    const [query, setQuery] = useState("")
    const [searchedBooks, setSearchedBooks] = useState([]);
    const updateQuery = (query) => {
        setQuery(query)
    }

    useEffect(() => {
        const search = async () => {

            const res = query.trim().length > 0 ? await BooksAPI.search(query) : []

            return Array.isArray(res) ? res : []
        };

        search().then(r => {
            if (r.length > 0) {
               r.map((r) => {
                   const fetched =  fetchBooks.filter(book => (book.shelf === "currentlyReading" || book.shelf === "wantToRead" || book.shelf === "read"));
                   const found = fetched.findIndex(e => r.id === e.id)
                   if (found!==-1) {
                       r.shelf = fetched[found].shelf
                   }
                })
            }
            setSearchedBooks(r)
        });
    }, [query]);


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                           placeholder="Search by title, author, or ISBN"
                           value={query}
                           onChange={(e) => updateQuery(e.target.value)}/>

                </div>
            </div>
            <div className="search-books-results">
                <BooksGrid books={searchedBooks} onShelfChange={onShelfChange}/>
            </div>
        </div>
    )
};

export default SearchBooks;