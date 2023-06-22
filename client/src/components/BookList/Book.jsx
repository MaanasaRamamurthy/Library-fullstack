import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../../context';
import "./BookList.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Book = (book) => {

  const [buttonText, setButtonText] = useState('Borrow');
  const {setBooksBorrowed,storedData } = useGlobalContext();
  // const [booksBorrowed, setBooksBorrowed] = useState({
  //   cover_img: book.cover_img,
  //   title: book.title,
  //   author: book.author,

  // })
  const navigate = useNavigate();
  const authPage = () => {
    navigate('/auth')
  }
  const handleClick = () => {
    
    if (buttonText === 'Borrow') {
      setButtonText('Go to myBooks');
      setBooksBorrowed((prevState) => {
        const updatedBooks = [
          ...prevState,
          {
            id: book.id,
            cover_img: book.cover_img,
            title: book.title,
            author: book.author,
          },
        ];
        Cookies.set('booksBorrowed', updatedBooks);
        return updatedBooks;
      });
    } else {
      navigate('/MyBooksRoute'); // Navigate to '/myBooks' route
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  return (
    <div data-aos="fade-up" data-aos-duration='600' className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author[0]}</span>
        </div>
        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        <div className='flex'>
          <Link to = {`/book/${book.id}`} {...book}>
            <button className='btn desc'>Description</button>
          </Link>
          
            <button className='btn desc' onClick={storedData?handleClick:authPage}>{buttonText}</button>
          
        </div>
      </div>
    </div>
  )
}

export default Book