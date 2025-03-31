import { Component } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css'
})
export class CustomCardComponent {
  card: Card = Card.multiFieldCard;
}
