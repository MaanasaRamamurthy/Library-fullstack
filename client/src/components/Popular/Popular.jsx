import React, {useEffect} from "react";
import './Popular.css'
import Book1 from '../../images/book1.jpg'
import Author1 from '../../images/Author1.jpeg'
import Book2 from '../../images/book2.jpg'
import Author2 from '../../images/Author2.jpg'
import Book3 from '../../images/book3.jpg'
import Author3 from '../../images/Author3.jpeg'
import Book4 from '../../images/book4.jpg'
import Author4 from '../../images/Author4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const writers = [
    {
        id: 1,
        bookImage: Book1,
        writerImage: Author1,
        writerName: 'AuthorName',
        socialLink:'@socialLink'
    },
    {
        id: 2,
        bookImage: Book2,
        writerImage: Author2,
        writerName: 'AuthorName',
        socialLink:'@socialLink'
    },
    {
        id: 3,
        bookImage: Book3,
        writerImage: Author3,
        writerName: 'AuthorName',
        socialLink:'@socialLink'
    },
    {
        id: 4,
        bookImage: Book4,
        writerImage: Author4,
        writerName: 'AuthorName',
        socialLink:'@socialLink'
    }
]
function Popular () {
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
    return(
        <div className="popular container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>Popular Books of the Month</h2>
                <div className="popularContainer grid">
                    {
                        writers.map(({id, bookImage, writerImage, writerName, socialLink})=>{
                            return(
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleWriter">
                                    <img src={bookImage} alt="" className="bookImage"/>
                                    <div className="writerDetails">
                                        <div className="writerPicture">
                                            <img src={writerImage} alt="" className="writerImage"/>
                                        </div>
                                        <div className="writerName">
                                            <span>{writerName}</span>
                                            <p className="fs-17">{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Popular