import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Airplane } from '../models/airplane-model';
import { Flight } from '../models/flight-model';
import { AirplaneService } from '../services/airplane.service';
import { FlightsService } from '../services/flights.service';



@Component({
  selector: 'app-passanger-form',
  templateUrl: './passanger-form.component.html',
  styleUrls: ['./passanger-form.component.css']
})
export class PassangerFormComponent implements OnInit {

  PassangerForm = this.fb.group({
    id: [''],
    name: [''],
    lastname: [''],
    id_type: [''],
    age: [''],
    flight_reservation: [''],
    seat: [''],
  });


  constructor(private fb: FormBuilder) { }


ngOnInit(): void {
 
}


}
