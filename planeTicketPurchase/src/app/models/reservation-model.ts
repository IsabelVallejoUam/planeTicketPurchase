import { Flight } from "./flight-model";
import { Passanger } from '../models/passanger-model';
import { Service } from '../models/service-model';

export interface Reservation {
    id: number;
    flight: Flight;
	ownedby: number;
	price: number;
	status: string;
    passangers: Passanger[];
    Service: Service[]
    code: string;


}
