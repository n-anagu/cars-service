import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const carsRoutes: Routes = [
  // TODO
  // { path: 'cars/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})

export class CarsRoutingModule {}
