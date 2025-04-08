import { Component } from '@angular/core';
import { CustomCardComponent } from '../../components/custom-card/custom-card.component';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-sandbox-page',
  imports: [CustomCardComponent],
  templateUrl: './card-sandbox-page.component.html',
  styleUrl: './card-sandbox-page.component.css',
})
export class CardSandboxPageComponent {
  cards: Card[] = [];
  maxZIndex: number = 1;

  constructor() {
    // generate example cards
    // TODO: switch this to load from app state
    for (let i = 0; i < 6; i++) {
      let c: Card;
      let n: number = Math.floor(Math.random() * 4);

      switch (n) {
        case 0:
          c = Card.titledCard();
          break;
        case 1:
          c = Card.multiFieldCard();
          break;
        case 2:
          c = Card.enumCard();
          break;
        default:
          c = Card.oneStringCard();
          break;
      }

      c.pos = { x: 100, y: i * 100 + 50};
      this.cards.push(c);
    }
  }

  updateZIndex(c: Card) {
    c.zIndex = this.maxZIndex++;
  }
}
