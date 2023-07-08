import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import '../App.css';

const apiKey = '538d6a3bc31761cd9909b01b8d035f21';

const Header = ({ setSearchResults }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );
      setSearchResults(response.data.results);
      navigate('/');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#1f1f1f',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flex: '1',
          marginLeft: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '5px',
            width: '70%',
          }}
        >
          <input
            type="text"
            placeholder="Search for movies..."
            aria-label="search"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '8px',
              outline: 'none',
              width: '100%',
              fontSize: '14px',
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '20px',
              fontSize: '14px',
              border: 'none',
              padding: '8px',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
            onClick={handleSearch}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      <NavLink
        exact
        to="/"
        activeClassName="active-link"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '18px',
          marginRight: '10px',
        }}
      >
        <HomeIcon style={{ fontSize: '23px' }} />
        <div style={{ fontSize: '20px' }}>Home</div>
      </NavLink>

      <NavLink
        exact
        to="/favorites"
        activeClassName="active-link"
        style={{
          color: 'white',
          textDecoration: 'none',
          alignItems: 'center',
          gap: '8px',
          marginLeft: '20px',
          marginRight: '10px',
        }}
      >
        <FavoriteIcon style={{ fontSize: '23px' }} />
        <div style={{ fontSize: '20px' }}>Favorites</div>
      </NavLink>
    </header>
  );
};

export default Header;
