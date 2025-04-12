import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetsStorageService {
  data: Map<string, Map<string, number>>;

  constructor() {
    this.data = new Map();
    this.load();
  }

  cleanData() {
    Array.from(this.data.entries())
      .filter((e) => e[1].size == 0)
      .forEach((e) => this.data.delete(e[0]));
  }

  private save() {
    this.cleanData();
    localStorage.setItem(
      'assets',
      JSON.stringify(
        Array.from(this.data.entries()).map((l) => [
          l[0],
          Array.from(l[1].entries()),
        ]),
      ),
    );
  }

  private load() {
    const ls = localStorage.getItem('assets');
    if (ls != null && ls != '') {
      new Map<string, Map<string, number>>(JSON.parse(ls)).forEach(
        (v: Map<string, number>, k: string) => {
          this.data.set(k, new Map(v));
        },
      );
    }
  }

  addLocation(location: string) {
    this.data.set(location, new Map<string, number>());
  }

  deleteLocation(location: string) {
    this.data.delete(location);
    this.save();
  }

  addItem(location: string, item: string) {
    const asd = this.data.get(location);
    if (asd == undefined) return;
    asd.set(item, 0);
    this.data.set(location, asd);
    this.save();
  }

  modifyItem(
    location: string,
    item: string,
    callbackfn: (oldValue: number) => number,
  ): number {
    const asd = this.data.get(location);
    if (asd == undefined) return -1;
    const oldValue = asd.get(item);
    if (oldValue == undefined) return -1;
    const newValue = callbackfn(oldValue);
    asd.set(item, newValue);
    this.data.set(location, asd);
    this.save();
    return newValue;
  }

  deleteItem(location: string, item: string) {
    const asd = this.data.get(location);
    if (asd == undefined) return;
    asd.delete(item);
    this.data.set(location, asd);
    this.save();
  }
}
