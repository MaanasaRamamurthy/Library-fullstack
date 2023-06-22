import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";

const App = React.createContext();

const AppProvider = ({children}) => {
    const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem('data')))
    const [booksBorrowed, setBooksBorrowed] = useState([])
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");


    /* asynchronous function will only be called when the dependencies change */
    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            /* pauses the execution of the funtion until the promise returned by the fetch() is resolved */
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            /* destructuring assignment */
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 100).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length >= 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <App.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,booksBorrowed, setBooksBorrowed, storedData, setStoredData
        }}>
            {children}
        </App.Provider>
    )
}

/* return the value of the context such as loading, books, setSearchTerm etc */
/* without that, need to call useContext(App) in each component -> repetitive */
export const useGlobalContext = () => {
    return useContext(App);
}

export {App, AppProvider};