<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
});

export const { selectMovie, clearSelectedMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
});

export const { selectMovie, clearSelectedMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
>>>>>>> a2d4e4059827292769bcd3c4df59b74a9e6a6e43
