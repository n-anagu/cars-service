import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car: Car;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar(): void {
    this.car = this.route.snapshot.data['car'];
  }
}
