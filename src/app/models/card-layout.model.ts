import { CardField } from "./card-field.model";

export class CardLayout {
  rows: CardField[][];

  constructor(defaultRows: CardField[][] = []) {
    this.rows = defaultRows;
  }

  add(field: CardField) {
    this.rows.push([field]);
  }

  addToRow(field: CardField, rowInd: number) {
    if (rowInd < 0 || rowInd >= this.rows.length) return;
    field.col = this.rows[rowInd].length;
    this.rows[rowInd].push(field);
  }
}