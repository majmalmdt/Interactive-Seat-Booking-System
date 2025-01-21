import React from 'react';
import SeatComponent from './SeatComponent';

interface SeatTierComponentProps {
  tierName: 'Silver' | 'Gold' | 'Platinum';
  seatLetters: string[];
  price: number;
}

/**
 * A component that renders a tier of seats. The tier is rendered as a container
 * with a heading that shows the tier name and price, a horizontal line, and a
 * grid of seats. The seats are rendered as SeatComponents.
 *
 * @param {Object} props
 * @param {string} props.tierName The name of the tier (e.g. Silver, Gold, Platinum)
 * @param {string[]} props.seatLetters The letters used to identify the seats in
 *   this tier (e.g. ['A', 'B'])
 * @param {number} props.price The price of a seat in this tier
 */

const SeatTierComponent: React.FC<SeatTierComponentProps> = ({
  tierName,
  seatLetters,
  price,
}) => {
  return (
    <div className="p-4 bg-white shadow-sm rounded-lg max-w-full">
      <h1 className="text-lg font-semibold mb-2 text-center">
        {tierName} (₹{price})
      </h1>
      <div className="flex-grow border-t border-gray-300 mb-4"></div>
      <div className="overflow-auto "> {/* Add max-height or height */}
        {seatLetters.map((letter) => (
          <div key={letter} className="flex items-center gap-2">
            {[...Array(10)].map((_, i) => (
              <SeatComponent
                key={letter + (i + 1)}
                seatNumber={letter + (i + 1)}
                price={price}
                tierName={tierName}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatTierComponent;
