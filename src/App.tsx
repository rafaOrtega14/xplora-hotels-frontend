import React, { useState } from "react";
import BookingSearchBar from "./components/BookingSearch/BookingSearch";
import AccommodationCard from "./components/AccomodationCard/AccomodationCard";
import "./App.css";
import { Hotel } from "./types/Hotel";
import { calculateDaysBetweenDates, calculateMediaPrice } from "./helpers/hotel";
import Modal from "./components/BookingModal/Modal";
import { BookingInfo } from "./types/Booking";
import { HotelService } from "./services/hotelService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>();
  const [isModalVisible, setIsVisible] = useState<boolean>(false)

  const findHotelsAvailability = async (): Promise<void> => {
    let availability;
    try{
      availability = await HotelService.availability(checkInDate, checkOutDate)
    }catch(e){
      toast.error(`${e}`);
    }
    setHotels(availability ?? []);
  };

  const showModal = (bookingData: BookingInfo) => {
    setBookingInfo(bookingData)
    setIsVisible(true)
  }
  const handleCloseModal = () => {
    setIsVisible(false)
  }
  return (
    <div>
      <BookingSearchBar
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        setCheckInDate={setCheckInDate}
        setCheckOutDate={setCheckOutDate}
        handleSearch={findHotelsAvailability}
      />
      {hotels?.length >0 && hotels.map(hotel => {
        return (
        <div>
          <div className="accomodation-container">
            <AccommodationCard
              id={hotel.id}
              isHotel={true}
              title={`${hotel.name} - ${hotel.address.postal_code} ${hotel.address.street} ${hotel.address.street_number}`}
              image={hotel.image}
              description={hotel.description}
              reviewScore={hotel.rating}
              price={calculateMediaPrice(hotel.rooms, calculateDaysBetweenDates(checkInDate, checkOutDate))}
            />
          </div>
          <div className="room-container">
            {hotel.rooms.map(room => {
              const price = calculateDaysBetweenDates(checkInDate, checkOutDate) * room.price
              return (
              <AccommodationCard
                id={room.id}
                checkIn={checkInDate}
                checkOut={checkOutDate}
                isHotel={false}
                title={room.name}
                image={room.image}
                description={room.description}
                reviewScore={4}
                handleBook={showModal}
                price={price}
              />
            )
            })}
          </div>
        </div>
        );
      })}
      {bookingInfo && (
        <Modal 
        show={isModalVisible}
        bookingInfo={bookingInfo}
        handleClose={handleCloseModal} 
      />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
