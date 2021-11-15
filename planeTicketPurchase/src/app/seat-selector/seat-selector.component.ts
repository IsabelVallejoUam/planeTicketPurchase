import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airplane } from '../models/airplane-model';
import { Flight } from '../models/flight-model';
import { SeatFlight } from '../models/seat-flight-model';
import { AirplaneService } from '../services/airplane.service';
import { FlightsService } from '../services/flights.service';


@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css']
})
export class SeatSelectorComponent implements OnInit {

  economy = "economy";
  flight!:Flight;
  plane!: Airplane;
  row: number[] = [];
  seating : [SeatFlight[]] = [[]];

  constructor(private route:ActivatedRoute, private flightService:FlightsService, private airplaneService:AirplaneService ) { }


ngOnInit(): void {
    this.getFlight();
    this.getAirplane();
    this.createArray();
}

getFlight(): void{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.flightService.getFlight(id).subscribe(flight => this.flight = flight);
}

getAirplane(): void{
  this.airplaneService.getAirplane(this.flight.plane_id).subscribe(airplane => this.plane = airplane);
}

createArray(): void {
   var contador = 1;
   for(let i=0; i< this.plane.seating.rows; i++){
      var seatRow = this.flight.flight_seats.slice((i*this.plane.seating.columns), (this.plane.seating.columns*(contador)))!.map(this.planeSeatToFlightSeat)
      contador++;
      this.seating.push(seatRow);
    };

    this.seating.shift()
    console.log(this.seating);
    
  }

  planeSeatToFlightSeat(s:SeatFlight){
    return {id:s.id, column:s.column, row:s.row, class: s.class, status:s.status }
  }

 

}



