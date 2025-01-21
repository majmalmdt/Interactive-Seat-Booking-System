# Interactive Seat Booking System

An interactive seat booking system for movie theaters or event venues built using **React**, **Redux**, and **Vite**. The app enables users to select seats dynamically, view real-time pricing, and book seats with an intuitive user interface.

---

## Features

### Seat Layout
- Grid display of seats (e.g., 6 rows x 10 seats per row).
- Seats are color-coded based on pricing tiers:
  - **Silver**: Front rows, ₹100.
  - **Gold**: Middle rows, ₹150.
  - **Platinum**: Back rows, ₹200.
- Each seat has a unique identifier (e.g., A1, A2, ..., F10).
- Seats are clickable for selection and deselection.

### Dynamic Pricing
- Real-time updates for seat prices and total cost as seats are selected/deselected.

### Booking Summary
- Displays selected seats and their respective prices.
- Shows total cost and includes a **"Book Now"** button for confirmation.

### Constraints
- Maximum of **8 seats** can be selected at a time.
- An error message appears if more than 8 seats are selected.

---

## Technologies Used

- **React** (with Vite for fast development).
- **Redux** (with Redux Toolkit for state management).
- **TypeScript**.
- **Tailwind CSS** for styling.

---

## Installation & Usage

### Prerequisites

Ensure the following are installed on your machine:
- Node.js (v14 or higher)
- npm 

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/majmalmdt/Interactive-Seat-Booking-System.git
   cd Interactive-Seat-Booking-System
   npm install
   npm run dev
