export interface Flight {
    id: number;
    dateTime: Date;
    price: number;
    duration: number;
    plane_id: number;
    departure_airport: number;
    destination_airport: number;
    airline: string;
    seats?: number;

}
