import { createComponent } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Passanger } from '../models/passanger-model';
import { Service } from '../models/service-model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {

  numberPassangers: number[] = [1];
  numberServices: number[] = [1];
  services: Service[] = [];

  constructor(private servicesService: ServiceService) { }

  ngOnInit(): void {
    this.getServices();
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
}
