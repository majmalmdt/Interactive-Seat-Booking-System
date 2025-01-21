import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Seat {
  id: string;
  type: 'Silver' | 'Gold' | 'Platinum'; // Define the seat type
  price: number;
}

interface SeatState {
  selectedSeats: Seat[]; // Store the selected seats
}

const initialState: SeatState = {
  selectedSeats: [],
};

/**
 * Manages the state of selected seats in the application.
 * The `seatSlice` contains two actions:
 * - `selectSeat`: Adds a new seat to the list of selected seats, if it doesn't already exist.
 * - `deselectSeat`: Removes a seat from the list of selected seats by its ID.
 */
const seatSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    selectSeat: (state, action: PayloadAction<Seat>) => {
      if (!state.selectedSeats.find((seat) => seat.id === action.payload.id)) {
        state.selectedSeats.push(action.payload);
      }
    },
    deselectSeat: (state, action: PayloadAction<string>) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat.id !== action.payload
      );
    },
  },
});

export const { selectSeat, deselectSeat } = seatSlice.actions;
export default seatSlice.reducer;
