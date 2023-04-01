// import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import ContactPage from './pages/ContactPage';
import TrackerPage from './pages/TrackerPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/companies' element={ <CompaniesPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
        <Route path='/tracker' element={ <TrackerPage /> } />
        <Route path='/stats' element={ <StatsPage /> } />
        <Route path='/quoter' element={ <HomePage /> } />
        <Route path='/contact' element={ <HomePage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
