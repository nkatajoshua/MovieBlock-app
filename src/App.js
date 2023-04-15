import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import TrendingTVShows from './Pages/TrendingTvShow';

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path='/tvshows' element={<TrendingTVShows/>} />
      </Routes>
    </>
  );
}

export default App;
