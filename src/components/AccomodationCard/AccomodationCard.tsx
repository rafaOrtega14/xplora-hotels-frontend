import React from "react";
import "./Accomodation.css";
import { BookingInfo } from "../../types/Booking";
import BookingCTAButton from "../BookingCTA/BookingCTAButton";

interface AccommodationCardProps {
  image: string;
  title: string;
  description: string;
  reviewScore: number;
  price: number;
  isHotel: boolean;
  id: number;
  checkIn?: string;
  checkOut?: string;
  handleBook?: (bookingInfo: BookingInfo) => void;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  id,
  checkIn,
  checkOut,
  image,
  title,
  description,
  reviewScore,
  price,
  isHotel,
  handleBook,
}) => {
  return (
    <div className={isHotel ? "accommodation-card" : "accommodation-card-room"}>
      <img src={image} alt="Accommodation" className="accommodation-image" />
      <div className="accommodation-details">
        <h2 className="accommodation-title">{title}</h2>
        <p className="accommodation-location">{description}</p>
        <div className="accommodation-price-section">
          <span className="accommodation-price">£{price}</span>
        </div>
        {!isHotel && handleBook && checkIn && checkOut && (
          <BookingCTAButton
            checkIn={checkIn}
            checkOut={checkOut}
            id={id}
            handleBook={handleBook}
            price={price}
            title={title}
          />
        )}
      </div>
      {isHotel && (
        <div className="accommodation-rating">
          <span>{reviewScore}</span>
        </div>
      )}
    </div>
  );
};

export default AccommodationCard;
