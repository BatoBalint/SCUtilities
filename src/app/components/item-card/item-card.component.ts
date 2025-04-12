import { Component, input, model } from '@angular/core';
import { AssetsStorageService } from '../../services/assets-storage.service';

@Component({
  selector: 'item-card',
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  changeAmount = input.required<number>();
  itemName = input.required<string>();
  itemCount = model<number>();
  location = input.required<string>();

  constructor(private assetsStorageService: AssetsStorageService) {}

  decrement(e: any) {
    this.itemCount.update(() =>
      this.assetsStorageService.modifyItem(
        this.location(),
        this.itemName(),
        (v) => (v > this.changeAmount() ? v - this.changeAmount() : 0),
      ),
    );
  }

  increment() {
    this.itemCount.update(() => {
      return this.assetsStorageService.modifyItem(
        this.location(),
        this.itemName(),
        (v) => v + this.changeAmount(),
      );
    });
  }

  deleteItem() {
    this.assetsStorageService.deleteItem(this.location(), this.itemName());
  }
}
