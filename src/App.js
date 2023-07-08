<<<<<<< HEAD
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
=======
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
>>>>>>> a2d4e4059827292769bcd3c4df59b74a9e6a6e43
