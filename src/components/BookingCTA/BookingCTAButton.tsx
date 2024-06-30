import React from "react";
import "../AccomodationCard/Accomodation.css";
import { BookingInfo } from "../../types/Booking";

interface BookingCTAButtonProps {
  title: string;
  price: number;
  id: number;
  checkIn: string;
  checkOut: string;
  handleBook: (bookingInfo: BookingInfo) => void;
}

const BookingCTAButton: React.FC<BookingCTAButtonProps> = ({
  id,
  checkIn,
  checkOut,
  price,
  title,
  handleBook,
}) => {
  return (
    <button
      className="accommodation-button"
      onClick={() =>
        handleBook({
          roomName: title,
          price,
          checkIn,
          checkOut,
          roomId: id,
        })
      }
    >
      Book Now!
    </button>
  );
};

export default BookingCTAButton;
