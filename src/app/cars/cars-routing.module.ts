import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsResolveService } from './cars-resolve.service';

const carsRoutes: Routes = [
  { path: 'cars/:id',
    component: CarDetailsComponent,
    resolve: { car: CarsResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})

export class CarsRoutingModule {}
