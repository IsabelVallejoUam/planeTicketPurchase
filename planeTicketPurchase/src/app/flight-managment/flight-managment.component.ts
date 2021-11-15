import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Airplane } from '../models/airplane-model';
import { Airport } from '../models/airport-model';
import { City } from '../models/city-model';
import { Flight } from '../models/flight-model';
import { SeatFlight } from '../models/seat-flight-model';
import { AirplaneService } from '../services/airplane.service';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flight-managment',
  templateUrl: './flight-managment.component.html',
  styleUrls: ['./flight-managment.component.css']
})
export class FlightManagmentComponent implements OnInit {

  cities: City[] = [];
  airports: Airport[] = [];
  airplanes: Airplane[] = [];
  plane!:Airplane;

  flightForm = this.fb.group({
    id: [''],
    dateTime: [''],
    price: [''],
    duration: [''],
    plane_id: [''],
    departure_airport: [''],
    destination_airport: [''],
    airline: [''],
    flight_seats: [''],
  });


  constructor(private fb: FormBuilder, private airportService: AirportsService, private cityService: CitiesService, private airplaneService: AirplaneService, private flightService:FlightsService, private router: Router) { }

  ngOnInit(): void {
    this.getAirports();
    this.getCities();
    this.getAirplanes();
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {this.cities = cities});
  }

  getAirports(): void {
    this.airportService.getAirports().subscribe(airports => {this.airports = airports});
  }

  getAirplanes(): void {
    this.airplaneService.getAirplanes().subscribe(airplanes => {this.airplanes = airplanes});
  }

  submitForm(){
    window.alert("new flight added");

    //EL ID DEBE SER EL TAMA;O DEL ARREGLO MAS UNO
    var plane_id = this.flightForm.get('plane_id')!.value;
    this.airplaneService.getAirplane(+plane_id).subscribe(airplane => {this.plane = airplane});

    this.flightForm.controls['id'].setValue(10);
    this.flightForm.controls['flight_seats'].setValue(this.fillSeat(this.plane));
    const flightData: Flight = this.flightForm.value;
    var date = Date.parse(this.flightForm.get('dateTime')?.value);
    flightData.dateTime = new Date(date); 

    this.flightService.addFlight(flightData);

    this.router.navigate(['/manageFlight/' + plane_id]);
    
  }

  fillSeat(Airplane:Airplane) {
    var seats:SeatFlight[]=[];
    var contador=0;
    for (var y = 0; y < Airplane.seating.rows; y++) {
      for (var x = 0; x < Airplane.seating.columns; x++) {
        contador++;
        if(contador<=Airplane.seating.firstClass){
          seats.push({id:contador,row:String.fromCharCode(y+65), column:x,class:"first", status:0});
        } else {
        seats.push({id:contador,row:String.fromCharCode(y+65), column:x,class:"economy", status:0});
        }
        
      }
    } 
  
    return seats;
  }
}
