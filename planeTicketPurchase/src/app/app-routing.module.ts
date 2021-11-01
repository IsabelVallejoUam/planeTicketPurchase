import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights/flights.component';
import { IndexReservationsComponent } from './index-reservations/index-reservations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchReservationComponent } from './search-reservation/search-reservation.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FlightManagmentComponent } from './flight-managment/flight-managment.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { FilterFlightsComponent } from './filter-flights/filter-flights.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'searchReservation', component: SearchReservationComponent },
  { path: 'reservations', component: IndexReservationsComponent },
  { path: 'searchFlight', component: SearchFlightComponent },
  { path: 'flight/:id', component: FlightDetailsComponent},
  { path: 'reservation/:code', component: ReservationComponent},
  { path: 'flightDashboard', component: FlightManagmentComponent },
  { path: 'newReservation', component: MakeReservationComponent},
  { path: 'filtered-flights/:city1/:city2', component: FilterFlightsComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
