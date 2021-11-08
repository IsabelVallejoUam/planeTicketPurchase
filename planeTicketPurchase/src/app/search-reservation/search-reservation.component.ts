import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ReservationService } from '../services/reservations.service';

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css'],
})
export class SearchReservationComponent implements OnInit {
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  searchForm = this.fb.group({
    code: [''],
  });

  resultComponent = false;

  ngOnInit(): void {}

  //ES LENTO PERO SIRVE
  submitForm() {
    let code: string = this.searchForm.get('code')!.value;
    this.resultComponent = true;
    //this.location.replaceState('/reservation/'+code);
    this.router.navigate(['/reservation/' + code]);
  }
}
