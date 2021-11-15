import { AIRPLANES } from './mock-airplane';
import { Flight } from './models/flight-model';
import { SeatFlight } from './models/seat-flight-model';


function fillSeat(row:number,column:number,first:number) {
  var seats:SeatFlight[]=[];
  for (var y = 0; y < row; y++) {
    var contador=0;
    for (var x = 0; x < column; x++) {
      contador++;
      if(contador<=first/row){
        seats.push({id:contador,row:String.fromCharCode(y+65), column:x+1,class:"first", status:0});
      } else {
        seats.push({id:contador,row:String.fromCharCode(y+65), column:x+1,class:"economy", status:0});
      }
      
    }
  } 

  return seats;
}

export const FLIGHTS: Flight[] = [
    {id: 1, dateTime: new Date(2021, 10, 10, 20 ,20 ), price: 125.600, duration: 90, plane_id: 1, departure_airport: 2, destination_airport: 7, airline:"AV", flight_seats: fillSeat(AIRPLANES[0].seating.rows, AIRPLANES[0].seating.columns, AIRPLANES[0].seating.firstClass)  },
    {id: 2, dateTime: new Date(2021, 10, 10, 7 ,20 ), price: 1225.600, duration: 200, plane_id: 2, departure_airport: 2, destination_airport: 3, airline:"EA", flight_seats: fillSeat(AIRPLANES[1].seating.rows, AIRPLANES[1].seating.columns, AIRPLANES[1].seating.firstClass) },
    {id: 3, dateTime: new Date(2021, 10, 10, 5 ,15 ), price: 625.600, duration: 120, plane_id: 2, departure_airport: 3, destination_airport: 7, airline:"EA", flight_seats: fillSeat(AIRPLANES[1].seating.rows, AIRPLANES[1].seating.columns, AIRPLANES[1].seating.firstClass) },
    {id: 4, dateTime: new Date(2021, 10, 10, 4 ,50 ), price: 425.600, duration: 180, plane_id: 3, departure_airport: 4, destination_airport: 3, airline:"AEE", flight_seats:  fillSeat(AIRPLANES[2].seating.rows, AIRPLANES[2].seating.columns, AIRPLANES[2].seating.firstClass) },
    {id: 5, dateTime: new Date(2021, 10, 10, 2 ,28 ), price: 4025.600, duration: 400, plane_id: 3, departure_airport: 5, destination_airport: 3, airline:"LUFT", flight_seats:  fillSeat(AIRPLANES[2].seating.rows, AIRPLANES[2].seating.columns, AIRPLANES[2].seating.firstClass) },
    {id: 6, dateTime: new Date(2021, 10, 10, 18 ,2 ), price: 2222.600, duration: 290, plane_id: 4, departure_airport: 7, destination_airport: 1, airline:"LUFT", flight_seats: fillSeat(AIRPLANES[3].seating.rows, AIRPLANES[3].seating.columns, AIRPLANES[3].seating.firstClass) },
    {id: 7, dateTime: new Date(2021, 10, 10, 12 ,30 ), price: 6457.600, duration: 60, plane_id: 4, departure_airport: 2, destination_airport: 1, airline:"VC", flight_seats: fillSeat(AIRPLANES[3].seating.rows, AIRPLANES[3].seating.columns, AIRPLANES[3].seating.firstClass) },
    {id: 8, dateTime: new Date(2021, 10, 10, 23 ), price: 80.600, duration: 30, plane_id: 1, departure_airport: 2, destination_airport: 3, airline:"AV",flight_seats: fillSeat(AIRPLANES[0].seating.rows, AIRPLANES[0].seating.columns, AIRPLANES[0].seating.firstClass) },
    {id: 9, dateTime: new Date(2021, 10, 10, 15 ,30 ), price: 75.600, duration: 30, plane_id: 1, departure_airport: 2, destination_airport: 3, airline:"AV",flight_seats:  fillSeat(AIRPLANES[0].seating.rows, AIRPLANES[0].seating.columns, AIRPLANES[0].seating.firstClass)},
    
  ];
