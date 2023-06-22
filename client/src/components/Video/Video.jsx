import {React, useEffect} from "react";
import Books from '../../images/Books.mp4'
import './Video.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useGlobalContext } from '../../context';

const Video = () =>{
    const {storedData} = useGlobalContext();

        useEffect(() => {
          Aos.init({
            duration: 2000
          })
        })

    return(
        <div className="video flex container">
            <div className=" mainText">
                <h1 data-aos="fade-up" data-aos-duration='2000'>Welcome Aboard {storedData?storedData.result.name:""}! Let the stories transport you.</h1>
            </div>
            <div data-aos='fade-down' data-aos-duration='2000'className="videoImages flex">
                <div className="videoDiv">
                    <video src={Books} autoPlay muted loop className="home-video video-mp4"></video>
                </div>
                <div className="quote">
                    <h1>Books are a uniquely portable magic!<br />- Stephen King</h1>
                </div>
            </div>
        </div>

    )
}

export default Video;