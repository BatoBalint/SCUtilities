import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private CARD_STORAGE_NAME: string = "cardPersistence";

  private cards: Card[] = [];
  private cardsSubject = new BehaviorSubject<Card[]>(this.cards);

  constructor() {
    this.loadCards();
  }

  addCard(c: Card) {
    this.cards.push(c);
    this.cardsSubject.next([...this.cards]);
    this.saveCards();
  }

  getCards() {
    return this.cardsSubject.asObservable();
  }

  private saveCards() {
    localStorage.setItem(this.CARD_STORAGE_NAME, JSON.stringify(this.cards));
  }

  private loadCards() {
    let cardsAsJSON = localStorage.getItem(this.CARD_STORAGE_NAME);
    if (cardsAsJSON) {
      this.cards = Object.assign(new Card(), JSON.parse(cardsAsJSON));
      this.cardsSubject.next(this.cards);
    }
  }
}
