<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
  };
  

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
  };
  

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
>>>>>>> a2d4e4059827292769bcd3c4df59b74a9e6a6e43
