import {FLIGHTS} from './mock-flights';
import { PASSANGERS } from './mock-passanger';
import { SERVICES } from './mock-services';
import { Passanger } from './models/passanger-model';
import { Reservation } from './models/reservation-model';
import { Service } from './models/service-model';



export const RESERVATIONS: Reservation[] = [
  {id:1, code:"abc123", flight: FLIGHTS[3], ownedby:1, price: SERVICES[1].price + FLIGHTS[3].price, status: "active", Service:[SERVICES[1]], passangers:[PASSANGERS[0],PASSANGERS[1]]},
  {id:2, code:"123da", flight: FLIGHTS[1], ownedby:2, price: SERVICES[1].price + FLIGHTS[1].price, status: "cancelled", Service:[SERVICES[1]], passangers:[PASSANGERS[2],PASSANGERS[1]]},
  {id:3, code:"321cba", flight: FLIGHTS[2], ownedby:3, price: SERVICES[0].price + FLIGHTS[2].price, status: "active", Service:[SERVICES[0]], passangers:[PASSANGERS[3],PASSANGERS[2]]},
  {id:4, code:"aaa111", flight: FLIGHTS[3], ownedby:4, price: SERVICES[0].price + FLIGHTS[3].price, status: "active", Service:[SERVICES[0]], passangers:[PASSANGERS[3],PASSANGERS[2]]},
  {id:5, code:"adf3", flight: FLIGHTS[1], ownedby:5, price: SERVICES[1].price + FLIGHTS[1].price, status: "active", Service:[SERVICES[1]], passangers:[PASSANGERS[0],PASSANGERS[1]]},
  {id:6, code:"dfrgv2", flight: FLIGHTS[2], ownedby:6, price: SERVICES[1].price + FLIGHTS[2].price, status: "active", Service:[SERVICES[1]], passangers:[PASSANGERS[4],PASSANGERS[2]]},
  {id:7, code:"frs12", flight: FLIGHTS[0], ownedby:1, price: SERVICES[0].price + FLIGHTS[0].price, status: "active", Service:[SERVICES[0]], passangers:[PASSANGERS[4],PASSANGERS[1]]},
   
];