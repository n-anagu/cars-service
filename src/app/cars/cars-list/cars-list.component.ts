import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  providers: [CarsService]
})
export class CarsListComponent implements OnInit {
  totalCost: number;
  grossCost: number;
  cars: Array<Car>;
  carForm: FormGroup = new FormGroup({
    model: new FormControl('', Validators.required),
    typeCar: new FormControl(''),
    year: new FormControl(''),
    color: new FormControl(''),
    cost: new FormControl(''),
    isFullyDamaged: new FormControl(''),
    clientFirstName: new FormControl(''),
    clientSurname: new FormControl(''),
    power: new FormControl(''),
    plate: new FormControl('', [Validators.required, Validators.minLength(3), Validators.minLength(7)]),
    deliveryDate: new FormControl(''),
    deadline: new FormControl(''),
  });
  constructor(
    private carsService: CarsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadCars();
  }

  public goToCarDetails(car: Car): void {
    this.router.navigate(['/cars', car.id]);
  }

  public onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

  public addCar(): void {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
    });
  }

  public removeCar(car: Car, event): void {
    event.stopPropagation(); // uniemożliwi wywołanie akcji w elemencie nadrzędnym -> wejście w widok auta
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    });
  }

  private loadCars(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  private countTotalCost(): void {
    this.totalCost = this.cars
      .map(car => car.cost)
      .reduce((prev, next) => prev + next);
  }
}
