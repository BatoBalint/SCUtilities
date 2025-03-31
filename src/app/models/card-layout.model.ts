import { CardField } from "./card-field.model";

export class CardLayout {
  rows: CardField[][] = [];

  constructor() {

  }

  add(field: CardField) {
    this.rows.push([field]);
  }

  addToRow(field: CardField, rowInd: number) {
    if (rowInd < 0 || rowInd >= this.rows.length) return;
    this.rows[rowInd].push(field);
  }
}
