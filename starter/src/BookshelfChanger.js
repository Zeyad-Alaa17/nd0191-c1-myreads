import React, {useState} from 'react';


const BookshelfChanger = ({book,onShelfChange}) => {
    const [shelf, setShelf] = useState(book.shelf ? book.shelf : 'none');
    const handleChange = (s) => {
        setShelf(s)
        onShelfChange(book,s)

    };

    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={event => handleChange(event.target.value)}>
                <option disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none" >None</option>
            </select>
        </div>
    );
};

export default BookshelfChanger;