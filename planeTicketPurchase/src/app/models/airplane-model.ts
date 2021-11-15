
import { Seating } from "./seating-model";

export interface Airplane {
    id: number;
    passanger_capacity: number;
    model: string;
    seating: Seating;
}
