export class CardField {
  type: string = "";
  placeholder: string = "";

  constructor(type: 'text' | 'number', placeholder: string) {
    this.type = type;
    this.placeholder = placeholder;
  }
}
