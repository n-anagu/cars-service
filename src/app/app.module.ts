import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core-module/core.module';
import { RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CarsModule,
    CoreModule,
    RouterModule.forRoot([{ path: 'cars', component: CarsListComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
