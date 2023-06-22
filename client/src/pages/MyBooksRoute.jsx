import PersonalLibrary from "../components/BookList/PersonalLibrary";
import React, {useEffect} from 'react'

const MyBooksRoute = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <main>
=           <PersonalLibrary/>
        </main>
      )
}

export default MyBooksRoute