import React from 'react';
import BookshelfChanger from "./BookshelfChanger";

const Book = ({book,onShelfChange}) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:

                            `url(${book.imageLinks.thumbnail})`,
                    }}
                ></div>
                <BookshelfChanger book={book} onShelfChange={onShelfChange}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors?book.authors.map(author => <p key={author}> {author}</p>):""}</div>
        </div>
    );
};

export default Book;