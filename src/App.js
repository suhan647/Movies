import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import MoviesPage from './pages/MoviesPage';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage';



function App() {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
        <BrowserRouter>
        <Header setSearchResults={setSearchResults}/>
      <Routes>
        
      <Route path="/" element={<MoviesPage searchResults={searchResults} />} />
        <Route path="/favorites" element={<FavoritesPage />} />

      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
