import React from 'react';

interface PopupAlertBoxProps {
  type: 'error' | 'warning' | 'success' | 'info';
  message: string;
  onClose: () => void;
}

/**
 * An object that maps different alert types (error, warning, success, info) to their corresponding CSS styles.
 * These styles are used to style the alert box component based on the type of alert.
 */
const alertStyles: Record<string, string> = {
  error: 'bg-red-100 text-red-800 border-red-500',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
  success: 'bg-green-100 text-green-800 border-green-500',
  info: 'bg-blue-100 text-blue-800 border-blue-500',
};

/**
 * A React functional component that renders a modal popup alert box to display different types of messages (error, warning, success, info) to the user.
 * The alert box is centered on the screen and has a close button on the top right corner.
 *
 * @param type The type of the message (error, warning, success, info)
 * @param message The message to be displayed in the alert box
 * @param onClose A callback function that is called when the close button is clicked
 */
const PopupAlertBox: React.FC<PopupAlertBoxProps> = ({ type, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className={`p-4 border-l-4 rounded shadow-lg sm:w-1/2 md:w-1/3  ${alertStyles[type]} relative`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-800 hover:text-gray-600"
        >
          &times;
        </button>
        <strong className="font-bold capitalize">{type}:</strong>
        <p className="mt-2">{message}</p>
      </div>
    </div>
  );
};

export default PopupAlertBox;
