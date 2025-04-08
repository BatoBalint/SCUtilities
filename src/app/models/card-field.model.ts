import { UserEnum } from "./user-enum.model";

export class CardField {
  type: string;
  placeholder: string;
  col: number;
  colspan: number;
  value: number | string;
  userenum: UserEnum;

  constructor(
    options: CardFieldOptions
  ) {
    this.type = options.type ?? FieldType.empty;
    this.placeholder = options.placeholder || '';

    options.colspan = options.colspan ?? 1;
    options.col = options.col ?? 0;
    if (options.colspan < 1) options.colspan = 1;
    if (options.colspan + options.col > 6) {
      if (options.col > 5) options.col = 5;
      options.colspan = 6 - options.col;
    }

    this.col = options.col;
    this.colspan = options.colspan;
    this.userenum = options.userenum ?? new UserEnum('Empty enum', ['Option1', 'Option2']);

    switch (options.type) {
      case FieldType.number:
        this.value = 0;
        break;
      default:
        this.value = '';
        break;
    }
  }
}

export interface CardFieldOptions {
  type?: FieldType | undefined,
  placeholder?: string | undefined,
  col?: number | undefined,
  colspan?: number | undefined,
  userenum?: UserEnum | undefined
}

// TODO: add more types for custom enums and titles
export enum FieldType {
  empty = 'empty',
  number = 'number',
  text = 'text',
  title = 'title',
  userenum = 'userenum',
}
