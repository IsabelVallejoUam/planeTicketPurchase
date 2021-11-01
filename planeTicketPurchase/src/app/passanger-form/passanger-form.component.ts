import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-passanger-form',
  templateUrl: './passanger-form.component.html',
  styleUrls: ['./passanger-form.component.css']
})
export class PassangerFormComponent implements OnInit {

  
  PassangerForm = this.fb.group({
    name: [''],
    lastname: [''],
    id_type: [''],
    age: [''],
    flight_reservation: [''],
  });

  Url = "http://algo"; 

  constructor(private fb: FormBuilder ) { }


ngOnInit(): void {
}


submitForm() {
  
}

}
