<<<<<<< HEAD
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Box,
  Button,
} from '@mui/material';
import { removeFromFavorites } from '../redux/favoritesSlice';
import MovieDetailsModal from './MovieDetailsModal';
import { clearSelectedMovie } from '../redux/moviesSlice';
import styled from '@emotion/styled';

const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    dispatch(clearSelectedMovie());
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" gutterBottom>
        <strong>Your Favorite Movies</strong>
      </Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={4} sx={{ m: '10px' }}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
              <CardWrapper>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  onClick={() => handleMovieClick(movie)}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Release Date:</strong> {movie.release_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Popularity:</strong> {movie.popularity}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px 16px' }}>
                  <Button
                    onClick={() => handleRemoveFromFavorites(movie.id)}
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Remove from Favorites
                  </Button>
                </Box>
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="subtitle1" align="center" mt={4}>
          You haven't added any favorite movies yet.
        </Typography>
      )}

      <Modal open={selectedMovie !== null} onClose={handleCloseModal} disableScrollLock>
        <MovieDetailsModal selectedMovie={selectedMovie} onClose={handleCloseModal} />
      </Modal>
    </Container>
  );
};

export default FavoritesPage;
=======
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Box,
  Button,
} from '@mui/material';
import { removeFromFavorites } from '../redux/favoritesSlice';
import MovieDetailsModal from './MovieDetailsModal';
import { clearSelectedMovie } from '../redux/moviesSlice';
import styled from '@emotion/styled';

const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    dispatch(clearSelectedMovie());
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" gutterBottom>
        <strong>Your Favorite Movies</strong>
      </Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={4} sx={{ m: '10px' }}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
              <CardWrapper>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  onClick={() => handleMovieClick(movie)}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Release Date:</strong> {movie.release_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Popularity:</strong> {movie.popularity}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px 16px' }}>
                  <Button
                    onClick={() => handleRemoveFromFavorites(movie.id)}
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Remove from Favorites
                  </Button>
                </Box>
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="subtitle1" align="center" mt={4}>
          You haven't added any favorite movies yet.
        </Typography>
      )}

      <Modal open={selectedMovie !== null} onClose={handleCloseModal} disableScrollLock>
        <MovieDetailsModal selectedMovie={selectedMovie} onClose={handleCloseModal} />
      </Modal>
    </Container>
  );
};

export default FavoritesPage;
>>>>>>> a2d4e4059827292769bcd3c4df59b74a9e6a6e43
