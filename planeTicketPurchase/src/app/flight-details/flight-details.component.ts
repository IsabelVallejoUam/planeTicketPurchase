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

  
  ngAfterViewInit(): void{
    this.appendInfo();
  }

  appendInfo(){
      this.transfromTime(this.flight.duration, this.flight.id);
      this.getHoursMinutes(this.flight.dateTime, this.flight.duration, this.flight.id);
      this.getDepDate(this.flight.dateTime, this.flight.id);
      this.getCityAlias(this.flight.id, this.flight.departure_airport, this.flight.destination_airport);
      this.getAirportName(this.flight.departure_airport, this.flight.destination_airport);
  }

  transfromTime(min: number, id: number): void {
    var hours = Math.floor(min / 60);          
    var minutes = min % 60;
    var text = document.createTextNode("Duracion vuelo: "+hours+"H "+minutes+"Min");
    document.getElementById("duration"+id)?.appendChild(text)
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

  
  getHoursMinutes(date: Date, min:number, id: number): void{
    //Departure TIME
    var hour = date.getHours();
    var minute = date.getMinutes();
    var text = document.createTextNode(hour +":"+ minute);
    document.getElementById("depart-hour"+id)?.appendChild(text)

    //Landing TIME
    var date1 = date.getTime();
    var duration = (min * 60 * 1000);
    var newDateObj = new Date(date1 + duration);
    var hour2 = newDateObj.getHours();
    var minute2 = newDateObj.getMinutes();
    var text2 = document.createTextNode(hour2 +":"+ minute2);
    document.getElementById("landing-hour"+id)?.appendChild(text2)

  }

  getDepDate(date: Date, id:number):void{
    var day = date.getDay();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var newDate = day+"/"+month+"/"+year;
    var text = document.createTextNode("Fecha vuelo: "+ newDate);
    document.getElementById("date-flight"+id)?.appendChild(text)
    
  }

  getCityAlias(id:number, airport1: number, airport2: number): void{
    this.airports.forEach(airport => {
      if(airport.id == airport1){
        this.cities.forEach(city => {
          if(city.id == airport.city_id){
            var text = document.createTextNode(city.alias);
            document.getElementById("depart-city"+id)?.appendChild(text)
          };
        });
      }
      if(airport.id == airport2){
        this.cities.forEach(city => {
          if(city.id == airport.city_id){
            var text = document.createTextNode(city.alias);
            document.getElementById("landing-city"+id)?.appendChild(text)
          };
        });
      }
    });
  }

  getAirportName(id1:number, id2:number): void{
    this.airports.forEach(airport => {
      if(airport.id == id1){
        console.log(airport.name);
        var text = document.createTextNode(airport.name);
            document.getElementById("depart-airport")?.appendChild(text)
      }
      if(airport.id == id2){
        console.log(airport.name);
        var text = document.createTextNode(airport.name);
            document.getElementById("landing-airport")?.appendChild(text)
      }
    });
  }

  Reservavisible = false;
  showForm(){
    this.Reservavisible = true;
  }
}
