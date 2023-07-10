import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchFlights = createAsyncThunk('fetchFlights', async () => {
  const res = await fetch('https://api.npoint.io/aaac66e0ce2d6db970be');
  const final = await res.json();
  return final;
});
