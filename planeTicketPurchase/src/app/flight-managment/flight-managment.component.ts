import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Airport } from '../models/airport-model';
import { AirportsService } from '../services/airports.service';

@Component({
  selector: 'app-flight-managment',
  templateUrl: './flight-managment.component.html',
  styleUrls: ['./flight-managment.component.css']
})
export class FlightManagmentComponent implements OnInit {

  
  flightForm = this.fb.group({
    id: [''],
    dateTime: [''],
    price: [''],
    duration: [''],
    plane_id: [''],
    departure_airport: [''],
    destination_airport: [''],
    airline: [''],
  });

  airports: Airport[] = [];

  constructor(private fb: FormBuilder, private airportsService: AirportsService) { }

  ngOnInit(): void {
    this.getAirports();
  }

  getAirports(): void {
    this.airportsService.getAirports().subscribe(airports => {this.airports = airports});
  }

  submitForm(){
    window.alert("new flight");
  }
}
