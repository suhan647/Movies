import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieDetailsModal from './MovieDetailsModal';

import {
  Container,
  Grid,
  Typography,
  Pagination,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Snackbar,
  Modal,
  Box,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from '@mui/icons-material';
import axios from 'axios';
import { selectMovie, clearSelectedMovie } from '../redux/moviesSlice';

const apiKey = '538d6a3bc31761cd9909b01b8d035f21';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

const MoviesPage = ({ searchResults }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const moviesPerPage = 10;
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMoviesData(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleAddToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
    setSnackbarOpen(true);
  };

  const handleMovieClick = (movie) => {
    dispatch(selectMovie(movie));
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedMovie());
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchResults.length > 0 ? searchResults.slice(indexOfFirstMovie, indexOfLastMovie) : moviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <Container maxWidth="xl" style={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Movies Page
      </Typography>
      <Grid container spacing={4}>
        {currentMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <Card style={{ height: '100%' }} onClick={() => handleMovieClick(movie)}>
              <CardMedia
                component="img"
                alt={movie.title}
                height="450"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Release Date: {movie.release_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Popularity: {movie.popularity}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px 16px' }}>
                <IconButton
                  color="primary"
                  aria-label="Add to Favorites"
                  onClick={() => handleAddToFavorites(movie)}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Add to Watchlist">
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Pagination
          count={Math.ceil(
            searchResults.length > 0 ? searchResults.length / moviesPerPage : moviesData.length / moviesPerPage
          )}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Added to Favorites"
      />

<Modal
        open={selectedMovie !== null}
        onClose={handleCloseModal}
        disableScrollLock // Disable scroll lock to prevent underlying page scrolling when modal is open
      >
        <MovieDetailsModal
          selectedMovie={selectedMovie}
          onClose={handleCloseModal}
          onAddToFavorites={handleAddToFavorites}
        />
      </Modal>

    </Container>
  );
};

export default MoviesPage;
