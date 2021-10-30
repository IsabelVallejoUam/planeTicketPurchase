import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights/flights.component';
import { IndexReservationsComponent } from './index-reservations/index-reservations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'searchReservation', component: ReservationComponent },
  { path: 'reservations', component: IndexReservationsComponent },
  { path: 'searchFlight', component: SearchFlightComponent },
  { path: 'flight/:id', component: FlightDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
