import { BookingInfo } from "../types/Booking";

export class BookingService {
    static async saveBooking(bookingInfo: BookingInfo, email: string): Promise<void> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "check_in": bookingInfo.checkIn,
              "check_out": bookingInfo.checkOut,
              "room_id": bookingInfo.roomId,
              "customer_email": email
          })
        };
        const bookingFetch = await fetch(`http://localhost:3001/booking`, requestOptions);
        const bookingResponse = await bookingFetch.json()
        if(bookingResponse?.status) throw new Error(bookingResponse.error)
    }
}