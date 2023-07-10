import {configureStore} from '@reduxjs/toolkit';
import FlightReducer from '../reducers/FlightSlice';

export const store = configureStore({
  reducer: {
    flights: FlightReducer,
  },
});
