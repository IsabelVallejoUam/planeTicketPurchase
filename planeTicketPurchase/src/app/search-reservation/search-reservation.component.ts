import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { ReservationService } from '../services/reservations.service';


@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css']
})
export class SearchReservationComponent implements OnInit {

  constructor(private fb: FormBuilder, private reservationService: ReservationService, private router:Router) { }

  searchForm = this.fb.group({
    code: [''],
  });

  loadComponent = false;

  ngOnInit(): void {
  }

  submitForm() {
    let code = this.searchForm.get('code')!.value;
    this.loadComponent = true;
    this.router.navigate(['/reservation/'+code])
    
  }

}
