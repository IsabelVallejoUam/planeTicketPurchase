import { Component, OnInit } from '@angular/core';
import { City } from '../models/city-model';
import { Router } from '@angular/router';
import { Airport } from '../models/airport-model';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cities: City[] = [];
  airports: Airport[] = [];

  constructor(private cityService:CitiesService, private airportsService:AirportsService) { }

  ngOnInit() {
    this.getCities();
    this.getAirports();
  }

  ngAfterViewInit(): void{

  }


  getCities(): void {
    this.cityService.getCities().subscribe(cities => {this.cities = cities});
  }

  getAirports(): void {
    this.airportsService.getAirports().subscribe(airports => {this.airports = airports});
  }


}
