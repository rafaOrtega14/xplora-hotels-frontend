import React, { useState } from 'react';
import './Modal.css';
import { BookingInfo } from '../../types/Booking';
import { BookingService } from '../../services/bookingService';

import 'react-toastify/dist/ReactToastify.css';
interface ModalProps {
  show: boolean;
  handleClose: () => void;
  bookingInfo: BookingInfo
}

const Modal: React.FC<ModalProps> = ({ 
    show,
    handleClose,
    bookingInfo
}) => {
  
  const [email, setEmail] = useState<string>('')
  const [afterMessage, setAfterMessage] = useState<string>('');
  const saveBooking = async () => {
    try {
      await BookingService.saveBooking(bookingInfo, email)
      setAfterMessage('Congratulations your booking have been made!')
    }catch(e) {
      setAfterMessage(`${e}`)
    }
  }

  if (!show) {
    return null;
  }
  return (
    <div className="modal-background" onClick={() => {handleClose(); setAfterMessage('')}}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {afterMessage.length > 0 ? (
          <h2>{afterMessage}</h2>
        ) : (
        <div>
          <h2>Booking information</h2>
          <p>Room Name: {bookingInfo.roomName}</p>
          <p>From {bookingInfo.checkIn} to {bookingInfo.checkOut}</p>
          <p>Price: £{bookingInfo.price}</p>
          <input type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="modal-input"
            placeholder="john@doe.com" 
          />
          <button className="modal-button" onClick={saveBooking}>Book</button>
        </div>
        )}

      </div>
    </div>
  );
};

export default Modal;
