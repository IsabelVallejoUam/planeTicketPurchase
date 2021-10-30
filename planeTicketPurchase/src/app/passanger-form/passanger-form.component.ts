import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private fb: FormBuilder, private http: HttpClient ) { }


ngOnInit(): void {
}


submitForm() {
  this.http.post(this.Url, this.PassangerForm.value).subscribe(
    (response) => (console.log(response),    window.alert("Passanger Added Succesfully")),
    (error) =>  (console.log(error),    window.alert("Passanger NOT Added Succesfully"))
  )

  
}

}
