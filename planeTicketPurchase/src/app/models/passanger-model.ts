import { SeatFlight } from "./seat-flight-model";

export interface Passanger {
    id: string;
    name: string;
    lastname: string;
    id_type: string;
    age: number;
    flight_reservation: number;
    seat?: SeatFlight;
}
