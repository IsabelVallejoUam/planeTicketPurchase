import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { SearchReservationComponent } from './search-reservation/search-reservation.component';
import { FlightManagmentComponent } from './flight-managment/flight-managment.component';
import { FlightsComponent } from './flights/flights.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { SeatSelectorComponent } from './seat-selector/seat-selector.component';
import { PassangerFormComponent } from './passanger-form/passanger-form.component';
import { IndexReservationsComponent } from './index-reservations/index-reservations.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FilterFlightsComponent } from './filter-flights/filter-flights.component';
import { UpdateFlightsComponent } from './update-flights/update-flights.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    SearchFlightComponent,
    FlightDetailsComponent,
    SearchReservationComponent,
    ReservationComponent,
    FlightManagmentComponent,
    FlightsComponent,
    MakeReservationComponent,
    SeatSelectorComponent,
    PassangerFormComponent,
    IndexReservationsComponent,
    FilterFlightsComponent,
    UpdateFlightsComponent,
    UpdateFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
