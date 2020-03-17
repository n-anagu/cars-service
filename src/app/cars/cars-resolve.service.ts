import { CarsService } from './cars.service';
import { Car } from './models/car';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsResolveService implements Resolve<Car> {
  constructor(private carsService: CarsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Car> {
    return this.carsService.getCar(route.params['id']);
  }
}
