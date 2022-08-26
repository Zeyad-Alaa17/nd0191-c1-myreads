import React from 'react';
import BooksGrid from "./BooksGrid";


const Bookshelf = ({bookshelfTitle,books,onShelfChange}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={books} onShelfChange={onShelfChange}/>
            </div>
        </div>

    );
};

export default Bookshelf;