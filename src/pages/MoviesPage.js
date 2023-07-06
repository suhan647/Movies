import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Pagination, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { Box } from '@mui/system';

const apiKey = '538d6a3bc31761cd9909b01b8d035f21';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  
  const moviesPerPage = 10;

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

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <Container maxWidth="xl" style={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Movies Page
      </Typography>
      <Grid container spacing={4}>
        {currentMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <Card style={{ height: '100%' }}>
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
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{display:"flex", justifyContent:"center"}}>
      <Pagination
        count={Math.ceil(moviesData.length / moviesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        style={{ marginTop: '2rem', justifyContent: 'center' }}
      />
      </Box>
    </Container>
  );
};

export default MoviesPage;
