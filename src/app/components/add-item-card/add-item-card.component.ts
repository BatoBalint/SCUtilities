import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import commoditiesData from '../../assets/commodities.json';
import { AssetsStorageService } from '../../services/assets-storage.service';

@Component({
  selector: 'add-item-card',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item-card.component.html',
  styleUrl: './add-item-card.component.css',
})
export class AddItemCardComponent {
  location = input.required<string>();
  commodities = commoditiesData;
  item = new FormControl('');

  constructor(private assetsStorageService: AssetsStorageService) {}

  save() {
    if (this.item.value) {
      this.assetsStorageService.addItem(this.location(), this.item.value);
      this.item.setValue('');
    }
  }
}
