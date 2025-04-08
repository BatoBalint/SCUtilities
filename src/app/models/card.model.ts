import { CardField, FieldType } from './card-field.model';
import { CardLayout } from './card-layout.model';
import { UserEnum } from './user-enum.model';

export class Card {
  static emptyCard(): Card {
    return new Card(new CardLayout());
  }

  static oneStringCard(): Card {
    return new Card(
      new CardLayout([[new CardField({type: FieldType.text, placeholder: 'Text section', col: 0})]]),
    );
  }

  static oneNumberCard(): Card {
    return new Card(
      new CardLayout([[new CardField({type: FieldType.number, placeholder: 'Number section', col: 0})]]),
    );
  }

  static multiFieldCard(): Card {
    return new Card(
      new CardLayout([
        [
          new CardField({type: FieldType.number, placeholder: 'The number filed', col: 0}),
          new CardField({type: FieldType.text, placeholder: 'The text field', col: 1}),
        ],
        [new CardField({type: FieldType.number, placeholder: 'The lower number', col: 1, colspan: 2})],
      ]),
    );
  }

  static titledCard(): Card {
    return new Card(
      new CardLayout([
        [new CardField({type: FieldType.title, placeholder: 'The title of this card'})],
        [
          new CardField({type: FieldType.empty, col: 0}),
          new CardField({type: FieldType.text, placeholder: 'Some string',col: 1})
        ]
      ])
    );
  }

  static enumCard(): Card {
    return new Card(
      new CardLayout(
        [
          [new CardField({type: FieldType.title, placeholder: 'Dropdown?'})],
          [
            new CardField({type: FieldType.empty}),
            new CardField({type: FieldType.userenum, userenum: new UserEnum("Rand name", ["Option 1", "Option 2"])})
          ]
        ]
      )
    );
  }

  layout: CardLayout;
  maxCol: number = 0;   // the largest column index that will be occupied by a field (colspan included)

  pos: Vector2 = { x: 0, y: 0 };
  zIndex: number = 0;

  constructor(layout: CardLayout) {
    this.layout = layout;

    // calculate the maximum column index for easier binding later in the html
    for (let row of layout.rows) {
      for (let field of row) {
        if (field.col + field.colspan - 1 > this.maxCol) this.maxCol = field.col + field.colspan - 1;
      }
    }
  }
}

export interface Vector2 {
  x: number;
  y: number;
}
