import { Room } from "../types/Hotel";

export const calculateMediaPrice = (rooms: Room[], days: number): number => {
    let mediaRating = 0;
    rooms.forEach(room => mediaRating += room.price)
    mediaRating /= rooms.length
    return mediaRating * days;
}

export const calculateDaysBetweenDates = (date1: string, date2: string): number =>  {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new Error('Una o ambas fechas son inválidas');
    }
  
    const differenceInTime = endDate.getTime() - startDate.getTime();
  
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  
    return Math.abs(differenceInDays);
  }