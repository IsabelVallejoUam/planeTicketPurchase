import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock-user';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  addUser(user: User): void {
    USERS.push(user);
  }

}