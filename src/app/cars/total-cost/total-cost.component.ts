import { Component, Input } from '@angular/core';

@Component({
  selector: 'total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {
  @Input() totalCost: number;
}
