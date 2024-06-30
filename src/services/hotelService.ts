import { Hotel } from "../types/Hotel";

export class HotelService {
    static async availability (checkInDate: string, checkOutDate: string): Promise<Hotel[] | undefined> {
        const hotelFetch = await fetch(
          `http://localhost:3001/availability?checkIn=${checkInDate}&checkOut=${checkOutDate}`
        );
        const hotelResponse = await hotelFetch.json();
        if(hotelResponse?.code) throw new Error(hotelResponse.error)
        return hotelResponse
      }
}