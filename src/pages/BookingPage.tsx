import SeatSummary from '../components/SeatSummary';
import SeatTierComponent from '../components/SeatTierComponent';

/**
 * A page component that renders a interactive seat booking system.
 * The system contains three tiers of seats: Silver, Gold, and Platinum.
 * Each tier has a different price, and the user can select seats from any tier.
 * The total price of the selected seats is displayed at the bottom of the page.
 *
 * The component uses the SeatTierComponent and SeatSummary components to
 * display the seat booking system.
 */
const BookingPage: React.FC = () => {
  const seatTierList = [
    { tierName: "Silver", seatLetters: ["A", "B"], price: 100 },
    { tierName: "Gold", seatLetters: ["C", "D"], price: 150 },
    { tierName: "Platinum", seatLetters: ["E", "F"], price: 200 },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl xl:text-3xl font-bold text-center mb-4">Interactive Seat Booking System</h1>
        {seatTierList.map((tier) => (
          <SeatTierComponent
            key={tier.tierName}
            tierName={tier.tierName as "Silver" | "Gold" | "Platinum"}
            seatLetters={tier.seatLetters}
            price={tier.price}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <SeatSummary />
      </div>
    </div>
  );
}

export default BookingPage;
