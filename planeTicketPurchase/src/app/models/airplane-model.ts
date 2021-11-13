import { Seat } from "./seat-model";

export interface Airplane {
    id: number;
    passanger_capacity: number;
    model: string;
    seats?: Seat[];
}
