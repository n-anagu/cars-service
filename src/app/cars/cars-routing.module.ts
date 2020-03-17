import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';

const carsRoutes: Routes = [
  { path: 'cars/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})

export class CarsRoutingModule {}
