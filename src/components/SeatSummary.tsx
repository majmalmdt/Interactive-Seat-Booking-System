import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import PopupAlertBox from './PopupAlertBox';

/**
 * A React functional component that displays a summary of selected seats.
 * The summary includes the count of Silver, Gold, and Platinum seats,
 * as well as the total price for the selected seats. A 'Book Now' button
 * is provided to confirm the booking, which triggers a success popup alert.
 */

const SeatSummary: React.FC = () => {
  const selectedSeats = useSelector((state: RootState) => state.seats.selectedSeats);
  const [showAlert, setShowAlert] = React.useState(false);

  const silverSeats = selectedSeats.filter((seat) => seat.type === 'Silver').length;
  const goldSeats = selectedSeats.filter((seat) => seat.type === 'Gold').length;
  const platinumSeats = selectedSeats.filter((seat) => seat.type === 'Platinum').length;

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="flex flex-col justify-center px-8 py-4 border rounded-lg bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Seat Summary</h2>
      <p>Silver Seats: {silverSeats}</p>
      <p>Gold Seats: {goldSeats}</p>
      <p>Platinum Seats: {platinumSeats}</p>
      <p className="font-bold">Total Price: ₹{totalPrice}</p>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={()=>setShowAlert(true)}>
        Book Now
      </button>
      {showAlert && (<PopupAlertBox type="success" message="Booking Confirmed!" onClose={() => setShowAlert(false)} />)}
    </div>

  );
};

export default SeatSummary;
