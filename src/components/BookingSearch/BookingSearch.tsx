import React from 'react';
import './BookingSearch.css';
import logo from '../../logo.png'

interface BookingSearchProps {
  setCheckInDate: React.Dispatch<React.SetStateAction<string>>;
  setCheckOutDate: React.Dispatch<React.SetStateAction<string>>;
  checkInDate: string;
  checkOutDate: string;
  handleSearch: () => Promise<void>
}
const BookingSearchBar: React.FC<BookingSearchProps> = ({
  setCheckInDate,
  setCheckOutDate,
  checkInDate,
  checkOutDate,
  handleSearch
}) => {
  return (
    <div className="container">
      <div className='logo'>
        <img className='imgLogo' alt="logo" src={logo} />
      </div>
      <div className="search-bar">
        <div className="input-group">
        </div>
        <div className="input-group">
          <label>Check In</label>
          <input
            required={true}
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Check Out</label>
          <input
            type="date"
            required={true}
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="input"
          />
        </div>
        <div className='buttonContainer'>
          <button onClick={handleSearch} className="button">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSearchBar;
