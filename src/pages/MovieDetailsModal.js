import { styled } from '@mui/material/styles';
import {
  Modal,
  Box,
  Grid,
  CardMedia,
  Typography,
  IconButton,
  Rating,
  Button,
  useMediaQuery,
} from '@mui/material';
import { Favorite as FavoriteIcon, Close as CloseIcon } from '@mui/icons-material';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: theme.shadows[5],
  outline: 'none',
  width: '100%',
  maxWidth: 600,
  padding: theme.spacing(2),
}));

const MovieDetailsModal = ({ selectedMovie, onClose, onAddToFavorites }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <StyledModal open={selectedMovie !== null} onClose={onClose}>
      <ModalContent>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              alt={selectedMovie?.title}
              image={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              {selectedMovie?.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Rating: <Rating value={selectedMovie?.vote_average / 2} precision={0.5} readOnly />
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Vote Count: {selectedMovie?.vote_count}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Release Date: {selectedMovie?.release_date}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Overview:
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {selectedMovie?.overview}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color="primary" aria-label="Add to Favorites" onClick={() => onAddToFavorites(selectedMovie)}>
                <FavoriteIcon />
              </IconButton>
              <Button variant="outlined" onClick={onClose}>
                Close
              </Button>
            </Box>
          </Grid>
        </Grid>
      </ModalContent>
    </StyledModal>
  );
};

export default MovieDetailsModal;
