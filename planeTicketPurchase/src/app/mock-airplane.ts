import { Airplane } from './models/airplane-model';
import { Seat } from './models/seat-model';

function fillSeat(row:number,column:number,first:number) {
  var seats:Seat[]=[];
  var contador=0;
  for (var y = 0; y < row; y++) {
    for (var x = 0; x < column; x++) {
      contador++;
      if(contador<=first){
        seats.push({id:first,row:y, column:x,class:"first"});
      } else {
      seats.push({id:first,row:y, column:x,class:"economy"});
      }
    }
  } 

  return seats;
}

export const AIRPLANES: Airplane[] = [
    {id:1, passanger_capacity:90, model: "Boenig-343", seats:fillSeat(45,2,10) },
    {id:2, passanger_capacity:50, model: "Avioneta 123", seats:fillSeat(25,2,5)},
    {id:3, passanger_capacity:300, model: "Boenig-274", seats:fillSeat(60,5,10)},
    {id:4, passanger_capacity:700, model: "Boenig-4000", seats:fillSeat(175,4,10)},
  ];

