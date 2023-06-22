import React, {useEffect} from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Video from '../../components/Video/Video'
import About from '../../components/About/About';
import Popular from '../../components/Popular/Popular'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
        <Video />
        <About />
        <Header />
        <Outlet />
        <Popular />
    </main>
  )
}

export default Home
