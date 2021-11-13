import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../models/user-model';
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
    lastname: [''],
    id_type: [''],
    email: [''],
    birthdate: [''],
    phone: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void{

  }

  submitForm(){
    const UserData: User = this.userForm.value;
    var date = Date.parse(this.userForm.get('birthdate')?.value);
    UserData.birthdate = new Date(date); 
    this.userService.addUser(this.userForm.value);
  }


}
