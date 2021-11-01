
import { Component, OnInit } from '@angular/core';
import { City } from '../models/city-model';
import { Flight } from '../models/flight-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from '../models/airport-model';
import { AirportsService } from '../services/airports.service';
import { CitiesService } from '../services/cities.service';
import { FlightsService } from '../services/flights.service';


@Component({
  selector: 'app-filter-flights',
  templateUrl: './filter-flights.component.html',
  styleUrls: ['./filter-flights.component.css']
})
export class FilterFlightsComponent implements OnInit {

  flights: Flight[] = [];
  cities: City[] = [];
  airports: Airport[] = [];

  constructor(private cityService:CitiesService, private flightService:FlightsService, private airportsService:AirportsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCities();
    this.getFlights();
    this.getAirports();
  }

  ngAfterViewInit(): void{
    this.appendInfo();
  }

  getFlights(): void {
    const city1 = Number(this.route.snapshot.paramMap.get('city1'));
    const city2 = Number(this.route.snapshot.paramMap.get('city2'));
    this.flightService.getFlightsCity(city1, city2).subscribe(flights => this.flights = flights);
  }

  getCities(): void {
    this.cityService.getCities().subscribe(cities => {this.cities = cities});
  }

  getAirports(): void {
    this.airportsService.getAirports().subscribe(airports => {this.airports = airports});
  }

  transfromTime(min: number, id: number): void {
    var hours = Math.floor(min / 60);          
    var minutes = min % 60;
    var text = document.createTextNode("Duracion vuelo: "+hours+"H "+minutes+"Min");
    document.getElementById("duration"+id)?.appendChild(text)
  }

  appendInfo(){
    this.flights.forEach(element => {
      this.transfromTime(element.duration, element.id);
      this.getHoursMinutes(element.dateTime, element.duration, element.id);
      this.getDepDate(element.dateTime, element.id);
      this.getCityAlias(element.id, element.departure_airport, element.destination_airport);
    });
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

  
}
