import { configureStore } from '@reduxjs/toolkit';
import seatReducer from '../features/seatSlice';

// Configure the store
const store = configureStore({
  reducer: {
    seats: seatReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
