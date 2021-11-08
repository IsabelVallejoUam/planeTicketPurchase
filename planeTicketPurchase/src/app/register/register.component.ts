import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = this.fb.group({
    id: [''],
    name: [''],
    phone: [''],
    lastname: [''],
    id_type: [''],
    email: [''],
    birthdate: [''],
  });

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void{

  }


  submitForm(){

    this.userForm.controls['id'].setValue(10);
    console.log(this.userForm.value);
    this.userService.addUser(this.userForm.value);

    
  }


}
