import React from 'react';
import Header from './components/HeaderBar/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Rules from './components/pages/Rules';
import Footer from './components//elements//Footer';
import Page404 from './components/pages/Page404';
import '../src/assets/vendor/bootstrap/scss/bootstrap.scss';
import '../src/assets/scss/style-esports.scss';
import '../src/assets/scss/custom.scss';

function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='info/:id' exact element={<Rules />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
      </Router>
      </>
  );
}

export default App;
