import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars/cars.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CarsModule],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
