export class UserEnum {
  name: string;       // name/id of the enum
  values: string[];   // the values that the enum can take

  constructor(name: string = '', values: string[] = []) {
    this.name = name;
    this.values = values;
  }
}
