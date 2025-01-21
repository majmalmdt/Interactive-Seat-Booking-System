import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { deselectSeat, selectSeat } from '../features/seatSlice';
import PopupAlertBox from './PopupAlertBox';


interface SeatComponentsProps {
    seatNumber: string; 
    tierName: 'Silver' | 'Gold' | 'Platinum';
    price: number;
}

/**
 * A single seat component that shows a button with the seat number.
 * If the seat is selected, it shows a green background with white text.
 * If the seat is not selected, it shows a gray background that changes to a darker gray when hovered.
 * When the button is clicked, it toggles the selection of the seat.
 * If the number of selected seats is 8, it shows an error message when the button is clicked.
 * @param seatNumber The number of the seat (e.g. 'A1', 'B2', etc.)
 * @param tierName The tier of the seat (e.g. 'Silver', 'Gold', "Platinum".)
 * @param price The price of the seat
 */
const SeatComponents: React.FC<SeatComponentsProps> = ({ seatNumber, tierName, price }) => {
    const dispatch = useDispatch();
    const selectedSeats = useSelector((state: RootState) => state.seats.selectedSeats);
    const isSelected = selectedSeats.some((seat) => seat.id === seatNumber);
    const [showAlert, setShowAlert] = React.useState(false);


    const toggleSeat = () => {
        if (isSelected) {
          dispatch(deselectSeat(seatNumber));
        } else {
            if (selectedSeats.length >= 8) {
                setShowAlert(true);
                return;
            }
          dispatch(selectSeat({ id: seatNumber, type: tierName, price: price }));
        }
      };
    return (
    <div>
        <button
        key={seatNumber}
        onClick={toggleSeat}
        className={`w-10 h-10 m-1 text-sm rounded-md font-bold ${
          isSelected
            ? "bg-green-500 text-white"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      >
        {seatNumber}
      </button>
            {showAlert && (<PopupAlertBox type="error" message="You can select only 8 seats" onClose={() => setShowAlert(false)} />)}
    </div>
    );
};

export default SeatComponents;
