import { Component } from '@angular/core';
import { CustomCardComponent } from '../../components/custom-card/custom-card.component';

@Component({
  selector: 'app-card-sandbox-page',
  imports: [CustomCardComponent],
  templateUrl: './card-sandbox-page.component.html',
  styleUrl: './card-sandbox-page.component.css'
})
export class CardSandboxPageComponent {
  nums: Number[] = []

  constructor() {
    this.myFunc();
  }

  myFunc() {
    for (let i = 0; i < 10; i++) {
      this.nums.push(i);
    }
  }
}
