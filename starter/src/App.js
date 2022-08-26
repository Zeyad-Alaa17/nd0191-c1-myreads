import "./App.css";
import {useEffect, useState} from "react";
import SearchBooks from "./SearchBooks";
import {Route, Routes} from "react-router-dom";
import BookList from "./BookList";
import {update} from "./BooksAPI";
import * as BooksAPI from "./BooksAPI";

function App() {

    const onShelfChange = (book, shelf) => {
        update(book, shelf)
    }
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        }
        getBooks();
    }, )

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<BookList books={books} onShelfChange={onShelfChange}/>}
            />
            <Route exact path="/search" element={<SearchBooks fetchBooks={books} onShelfChange={onShelfChange}/>}
            />
        </Routes>

    )
        ;
}

export default App;
