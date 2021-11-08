import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Airport } from '../models/airport-model';
import { City } from '../models/city-model';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
})
export class SearchFlightComponent implements OnInit {
  cities: City[] = [];
  airports: Airport[] = [];

  flightForm = this.fb.group({
    city_dep: [''],
    city_arr: [''],
    passagner: [''],
    date_dep: [''],
    date_arr: [''],
  });

  constructor(
    private cityService: CitiesService,
    private airportService: AirportsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCities();
    this.getAirports();
  }

  getCities(): void {
    this.cityService.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  getAirports(): void {
    this.airportService.getAirports().subscribe((airports) => {
      this.airports = airports;
    });
  }

  //ES LENTO PERO SIRVE
  submitForm() {
    let city1 = this.flightForm.get('city_dep')!.value;
    let city2 = this.flightForm.get('city_arr')!.value;
    console.log('ciudades: ' + city1 + '/' + city2);
    this.router.navigate(['filtered-flights/' + city1 + '/' + city2]);
  }
}
