export class CardField {
  type: string = "";
  placeholder: string = "";
  col: number = 0;
  value: number | string;

  constructor(type: FieldType, placeholder: string, col: number) {
    this.type = type;
    this.placeholder = placeholder;
    this.col = col;

    switch (type) {
      case FieldType.number: this.value = 0; break;
      default: this.value = ''; break; 
    }
  }
}

// TODO: add more types for custom enums and titles
export enum FieldType {
  number = 'number',
  text = 'text'
}
