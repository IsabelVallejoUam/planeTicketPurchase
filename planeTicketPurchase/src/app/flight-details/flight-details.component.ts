import { Component, OnInit } from '@angular/core';
import { City } from '../models/city-model';
import { Flight } from '../models/flight-model';
import { Airport } from '../models/airport-model';

import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private cityService:CitiesService, private flightService:FlightsService,  private route: ActivatedRoute, private airportsService:AirportsService) { }

  flight!: Flight;
  cities: City[] = [];
  airports: Airport[] = [];

  ngOnInit(): void {
    this.getCities();
    this.getFlight();
    this.getAirports();
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

  Reservavisible = false;
  showForm(){
    this.Reservavisible = true;
  }
}
