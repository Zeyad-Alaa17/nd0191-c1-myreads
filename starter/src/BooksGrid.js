import React from 'react';
import Book from "./Book";

const BooksGrid = ({books, onShelfChange}) => {
    books = books.filter(book => book.hasOwnProperty('imageLinks'))
    return (
        <ol className="books-grid">
            {books.map(book => <Book
                book={book}
                key={book.id}
                onShelfChange={onShelfChange}
            />)}
        </ol>
    );
};


export default BooksGrid;