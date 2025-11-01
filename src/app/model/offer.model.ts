export interface offer {
    id: number,
    country: string,
    description: string,
    price: number,
    discount?: number,
    bgImage: string,
    freeSeats: number
  }