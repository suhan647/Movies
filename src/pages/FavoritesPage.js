import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Snackbar,
  Modal,
  Box,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { removeFromFavorites } from '../redux/favoritesSlice';

const RemoveButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" gutterBottom>
        Favorites Page
      </Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={4} sx={{m:'10px'}}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={movie.title}
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
                  <Button sx={{color:"red"}} onClick={() => handleRemoveFromFavorites(movie.id)}>
                    <small>Remove from Favorites</small>
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="subtitle1" align="center">
          You have no favorite movies.
        </Typography>
      )}
    </Container>
  );
};


export default FavoritesPage;
