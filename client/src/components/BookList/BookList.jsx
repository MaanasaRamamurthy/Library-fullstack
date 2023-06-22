import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import Book from '../BookList/Book';
import Loading from '../Loader/Loader';
import coverImg from '../../images/Image_not_found.jpg';
import './BookList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const BookList = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  const { books, loading, resultTitle } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;


  const booksWithCovers = books.map((singleBook) => {
    
    return {
      ...singleBook,
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const booksToDisplay = booksWithCovers.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(booksWithCovers.length / booksPerPage);

  const renderPaginationButtons = () => {
    const buttons = [];
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    buttons.push(
      <button
        key="prev"
        onClick={() => setCurrentPage(prevPage)}
        className="pagination-button"
        disabled={currentPage === 1}
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
    );
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      buttons.push(
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </button>
      );
    }
    buttons.push(
      <button
        key="next"
        onClick={() => setCurrentPage(nextPage)}
        className="pagination-button"
        disabled={currentPage === totalPages}
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    );
  
    return buttons;
  };
  

  if (loading) return <Loading />;

  return (
    <section>
      <section className="booklist">
      <div className="container">
        <div data-aos="fade-right" data-aos-duration='2500' className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksToDisplay.map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
        <div className="pagination">
          {renderPaginationButtons()}
        </div>
      </div>
      </section>
    </section>
  );
};

export default BookList;
