import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookList/BookDetails/BookDetails";
import Newsletter from "./components/Newsletter/Newsletter"
import LoginPage from './pages/Home/LoginPage';
import MyBooksRoute from './pages/MyBooksRoute';
import Signup from './components/LoginSignup/Signup';
import Auth from './components/Auth/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
        <Route path = "myBooksRoute" element= {<MyBooksRoute />}/>
        <Route path = "login" element = {<LoginPage />} />
        <Route path = "signup" element = {<Signup />} />
        <Route path = "auth" element = {<Auth/>} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  </AppProvider>
);

