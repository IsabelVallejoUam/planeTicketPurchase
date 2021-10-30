import { Flight } from './models/flight-model';

export const FLIGHTS: Flight[] = [
    {id: 1, dateTime: new Date(2021, 10, 10, 20 ,20 ), price: 125.600, duration: 90, plane_id: 1, departure_airport: 2, destination_airport: 7, airline:"AV" },
    {id: 2, dateTime: new Date(2021, 10, 10, 7 ,20 ), price: 1225.600, duration: 200, plane_id: 2, departure_airport: 2, destination_airport: 3, airline:"EA" },
    {id: 3, dateTime: new Date(2021, 10, 10, 5 ,15 ), price: 625.600, duration: 120, plane_id: 2, departure_airport: 3, destination_airport: 7, airline:"EA" },
    {id: 4, dateTime: new Date(2021, 10, 10, 4 ,50 ), price: 425.600, duration: 180, plane_id: 3, departure_airport: 4, destination_airport: 3, airline:"AEE" },
    {id: 5, dateTime: new Date(2021, 10, 10, 2 ,28 ), price: 4025.600, duration: 400, plane_id: 3, departure_airport: 5, destination_airport: 3, airline:"LUFT" },
    {id: 6, dateTime: new Date(2021, 10, 10, 18 ,2 ), price: 2222.600, duration: 290, plane_id: 4, departure_airport: 7, destination_airport: 1, airline:"LUFT" },
    {id: 7, dateTime: new Date(2021, 10, 10, 12 ,30 ), price: 6457.600, duration: 60, plane_id: 4, departure_airport: 2, destination_airport: 1, airline:"VC" },
    {id: 8, dateTime: new Date(2021, 10, 10, 23 ), price: 80.600, duration: 30, plane_id: 1, departure_airport: 2, destination_airport: 3, airline:"AV" },
    {id: 9, dateTime: new Date(2021, 10, 10, 15 ,30 ), price: 75.600, duration: 30, plane_id: 1, departure_airport: 2, destination_airport: 3, airline:"AV" },
    
  ];