import {fetchFlights} from '../apis/FetchFlights';
const {createSlice} = require('@reduxjs/toolkit');
const initialState = {
  data: null,
  isLoader: false,
  isError: false,
};

const FlightSlice = createSlice({
  name: 'flights',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  reducers: {
    reset: state => (state = initialState),
  },
  extraReducers: builder => {
    builder.addCase(fetchFlights.pending, state => {
      state.isLoader = true;
    });
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFlights.rejected, state => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});
export const {reset} = FlightSlice.actions;

export default FlightSlice.reducer;
