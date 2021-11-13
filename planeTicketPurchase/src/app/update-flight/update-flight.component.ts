import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Flight } from '../models/flight-model';

import { City } from '../models/city-model';
import { Airport } from '../models/airport-model';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';
import { FormBuilder } from '@angular/forms';
import { Airplane } from '../models/airplane-model';
import { AirplaneService } from '../services/airplane.service';


@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  constructor(
    private cityService: CitiesService,
    private flightService: FlightsService,
    private airportsService: AirportsService,
    private airplaneService: AirplaneService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  flight!: Flight;
  cities: City[] = [];
  airports: Airport[] = [];
  airplanes: Airplane[] = [];

  flightForm = this.fb.group({
    id:[''],
    dateTime: [''],
    price: [''],
    duration: [''],
    plane_id: [''],
    departure_airport: [''],
    destination_airport: [''],
    airline: [''],
  });

  ngOnInit(): void {
    this.getCities();
    this.getAirports();
    this.getFlight();
    this.getAirplanes();
    this.fillForm();
  }

  fillForm(){

    var flightdate = this.flight.dateTime;
    flightdate.setMinutes(flightdate.getMinutes() - flightdate.getTimezoneOffset());
    var dateString = flightdate.toISOString().slice(0,16);

    this.flightForm.patchValue({
      id: Number(this.route.snapshot.paramMap.get('id')),
      dateTime: dateString,
      price: this.flight.price,
      duration: this.flight.duration,
      plane_id: this.flight.plane_id,
      departure_airport: this.flight.departure_airport,
      destination_airport: this.flight.destination_airport,
      airline: this.flight.airline,
    });
  }
  
  getFlight(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlight(id).subscribe(flight => this.flight = flight);
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {this.cities = cities});
  }

  getAirports(): void {
    this.airportsService.getAirports().subscribe(airports => {this.airports = airports});
  }

  getAirplanes(): void {
    this.airplaneService.getAirplanes().subscribe(airplanes => {this.airplanes = airplanes});
  }

  transfromTime(min: number): string {
    var hours = Math.floor(min / 60);          
    var minutes = min % 60;
    var text = ("Duracion vuelo: "+hours+"H "+minutes+"Min");
    return text;
  }

  getLandingTime(date: Date, min:number ): Date {
    var date1 = date.getTime();
    var duration = (min * 60 * 1000);
    var newDateObj = new Date(date1 + duration);
    return newDateObj;

  }


  getCityAlias(airportID: number): string {
    let airport = this.airports.find(airport => airport.id == airportID);
    let city =  this.cities.find(city => city.id == airport!.city_id);
    return city!.alias;
  }

  deleteFlight(){
    window.alert('VUELO BORRADA' + this.flight.id);
    this.flightService.deleteFlight(this.flight.id);
  }

  submitForm(){
    this.flight = this.flightForm.value;
    var date = Date.parse(this.flightForm.get('dateTime')?.value);
    this.flight.dateTime = new Date(date); 
    
    this.flightService.updateFlight(this.flight);
    window.alert('VUELO ACTUALIZADO' + this.flight.id);
    this.router.navigate(['/manageFlights']);
    
  }
}

