import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SERVICES } from '../mock-services';
import { Service } from '../models/service-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  getServices(): Observable<Service[]> {
    const services = of(SERVICES);
    return services;
  }

  getService(id: number): Observable<Service> {
    const service = SERVICES.find(a => a.id === id)!;
    return of(service);
  }

}