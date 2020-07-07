import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  public car: Car;
  carForm: FormGroup;

  constructor(private route: ActivatedRoute, private carsService: CarsService, private router: Router) {}

  ngOnInit(): void {
    this.loadCar();
    this.carForm = new FormGroup({
      model: new FormControl(this.car.model, [Validators.required]),
      typeCar: new FormControl(this.car.type),
      year: new FormControl(this.car.year),
      color: new FormControl(this.car.color),
      cost: new FormControl(this.car.cost),
      isFullyDamaged: new FormControl(this.car.isFullyDamaged),
      clientFirstName: new FormControl(this.car.clientFirstName),
      clientSurname: new FormControl(this.car.clientSurname),
      power: new FormControl(this.car.power),
      plate: new FormControl(this.car.plate, [Validators.required, Validators.minLength(3), Validators.minLength(7)]),
      deliveryDate: new FormControl(this.car.deliveryDate),
      deadline: new FormControl(this.car.deadline),
    });
  }

  public updateCar(): void {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  private loadCar(): void {
    // tslint:disable-next-line
    this.car = this.route.snapshot.data['car'];
  }
}
