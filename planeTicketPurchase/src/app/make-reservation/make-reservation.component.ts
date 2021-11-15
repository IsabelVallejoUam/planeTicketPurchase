import { createComponent } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../models/flight-model';
import { Passanger } from '../models/passanger-model';
import { Reservation } from '../models/reservation-model';
import { Service } from '../models/service-model';
import { FlightsService } from '../services/flights.service';
import { ReservationService } from '../services/reservations.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {

  numberPassangers: number[] = [1];
  numberServices: number[] = [1];
  reservationPassangers: Passanger[] = [];
  reservationServices: Service[] = [];
  services: Service[] = [];
  flight!:Flight;

  reservationForm = this.fb.group({
    id: [''],
    flight: [Number(this.route.snapshot.paramMap.get('id'))],
    ownedby: [''],
    price: [''],
    status: ['active'],
    passangers: [''],
    service: [''],
    code: [''],
  });


  constructor(private servicesService: ServiceService, private reservationService:ReservationService, private flightService:FlightsService, private fb: FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getServices();
    this.getFlight();
  }

  addPassanger(){
    this.numberPassangers.push(this.numberPassangers.length+1);
  }

  addService(){
    this.numberServices.push(this.numberServices.length+1);
  }

  getServices(): void{
      this.servicesService.getServices().subscribe(services => {this.services = services});
  }

  getFlight(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlight(id).subscribe(flight => this.flight = flight);
  }

  submitForm(){

    console.log(this.reservationForm.get('service.value')?.value);
    this.reservationForm.controls['id'].setValue(10);
    this.reservationForm.controls['ownedBy'].setValue(1);
    this.reservationForm.controls['price'].setValue(this.flight.price); //TOCA SUMAR VUELO Y TODOS LOS SERVICIOS
    this.reservationForm.controls['code'].setValue("XYZ321"); //TOCA HACER UN  KEY GENERATOR

    const reservationData: Reservation = this.reservationForm.value;
    
    this.reservationService.addReservation(reservationData);
  }

}
