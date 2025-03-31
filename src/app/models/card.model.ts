import { CardField, FieldType } from './card-field.model';
import { CardLayout } from './card-layout.model';

export class Card {
  static emptyCard = new Card(new CardLayout());
  static oneStringCard = new Card(
    new CardLayout([[new CardField(FieldType.text, 'Text section', 0)]]),
  );
  static oneNumberCard = new Card(
    new CardLayout([[new CardField(FieldType.number, 'Number section', 0)]]),
  );
  static multiFieldCard = new Card(
    new CardLayout([
      [
        new CardField(FieldType.number, 'The number filed', 0),
        new CardField(FieldType.text, 'The text field', 2),
      ],
      [new CardField(FieldType.number, 'The lower number', 1)],
    ]),
  );

  layout: CardLayout;
  maxCol: number = 0;

  constructor(layout: CardLayout) {
    this.layout = layout;
    for (let row of layout.rows) {
      for (let field of row) {
        if (field.col > this.maxCol) this.maxCol = field.col;
      }
    }
  }
}
