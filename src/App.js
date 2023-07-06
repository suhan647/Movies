import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import MoviesPage from './pages/MoviesPage';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
        <Header setSearchResults={setSearchResults}/>

        <MoviesPage searchResults={searchResults} />
    </div>
  );
}

export default App;
