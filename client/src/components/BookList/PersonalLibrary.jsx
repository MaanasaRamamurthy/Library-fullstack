import React from 'react'
import empty from "../../images/empty.png"

import Cookies from 'js-cookie';

import { useGlobalContext } from '../../context';
const PersonalLibrary = () => {
  const { booksBorrowed, setBooksBorrowed } = useGlobalContext();

  const returnBook = (bookId) => {
    
    setBooksBorrowed(prevState => prevState.filter(book => book.id !== bookId));
  };
console.log(booksBorrowed)
  return (
    <div className="container section">
    <div className="top-component sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Your Book Collection</h2>
        
      {booksBorrowed.length > 0 ? (
        booksBorrowed.map((book) => (
          <div className="popularContainer grid">
          <div key={book.id} data-aos="fade-up" data-aos-duration='600' className='book-item flex flex-column flex-sb'>

            <div className='book-item-img'>
              <img src={book.cover_img} alt="cover" />
            </div>
            <div className='book-item-info text-center'>
              <div className='book-item-info-item author fs-15'>
                <span>{book.id}</span>
              </div>
              <div className='book-item-info-item title fw-7 fs-18'>
                <span>{book.title}</span>
              </div>
              <div className='book-item-info-item author fs-15'>
                <span className='text-capitalize fw-7'>Author: </span>
                <span>{book.author}</span>
              </div>
              <div>
                <button onClick={() => returnBook(book.id)}>Return</button>
              </div>
            </div>
          </div>
          </div>
        ))
      ) : (
        <div>
        <p>Your bookshelf is so light. Go grab some books.</p>
        <img src={empty} alt="empty" className='empty'/>
        </div>
      )}
    </div>
   
    </div>
  )
}

export default PersonalLibrary
