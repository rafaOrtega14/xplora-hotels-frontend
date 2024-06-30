export interface Accomodation {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Hotel extends Accomodation {
  rating: number;
  rooms: Room[];
  address: Address;
}

export interface Room extends Accomodation {
  guests: number;
  price: number;
}

export interface Address {
  address_id: number;
  postal_code: string;
  street: string;
  street_number: number;
}
