export interface offer {
  id: number,
  country: string,
  description: string,
  price: number,
  discount?: number,
  bgImage: string,
  freeSeats: number,
  rating: number
}

export interface details {
  id: number,
  country: string,
  description: string,
  price: number,
  discount?: number,
  bgImage: string,
  freeSeats: number,
  rating: number
  guide: string,
  start_date: number,
  end_date: number
}