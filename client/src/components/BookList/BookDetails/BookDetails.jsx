import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../../Loader/Loader";
import coverImg from "../../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useGlobalContext } from '../../../context';
const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Borrow');
  const {setBooksBorrowed, storedData} = useGlobalContext();
  const authPage = () => {
    navigate('/auth')
  }

  const handleClick = () => {
    
    if (buttonText === 'Borrow') {
      setButtonText('Go to myBooks');
      setBooksBorrowed(prevState => [
        ...prevState,
        {
          id: book.id,
          cover_img: book.cover_img,
          title: book.title,
          author: book.author
        }
      ]);
    } else {
      navigate('/MyBooksRoute'); // Navigate to '/myBooks' route
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div data-aos="fade-down" data-aos-duration='2500' className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div data-aos="fade-down" data-aos-duration='2500' className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div data-aos="fade-right" data-aos-duration='2500' className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='book-details-item author'>
              <span className='fw-6 fs-24'>{book?.author}</span>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
            <button className='btn desc' onClick={storedData?handleClick:authPage}>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails