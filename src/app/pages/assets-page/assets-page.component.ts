import { Component, HostListener } from '@angular/core';
import locationsData from '../../assets/locations.json';
import commoditiesData from '../../assets/commodities.json';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { AssetsStorageService } from '../../services/assets-storage.service';
import { AddItemCardComponent } from '../../components/add-item-card/add-item-card.component';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-assets-page',
  imports: [ItemCardComponent, AddItemCardComponent, ReactiveFormsModule],
  templateUrl: './assets-page.component.html',
  styleUrl: './assets-page.component.css',
})
export class AssetsPageComponent {
  changeAmount: number = 1;
  locations = locationsData;
  commodities = commoditiesData;
  selectedLocationName = new FormControl('', [
    Validators.required,
    (control: AbstractControl): ValidationErrors | null => {
      if (this.locations.find((loc) => loc === control.value) === undefined) {
        return { forbiddenName: { value: control.value } };
      } else {
        return null;
      }
    },
  ]);
  selectedLocationInventory: Map<string, number> | undefined;
  activeLocations: string[] = [];

  constructor(private assetsStorageService: AssetsStorageService) {
    this.setActiveLocations();
  }

  setActiveLocations() {
    const arr = Array.from(this.assetsStorageService.data.keys());
    arr.sort((a, b) => (a < b ? -1 : 1));
    this.activeLocations = arr;
  }

  selectLocation(e: any) {
    if (
      (e.type == 'keyup' && e.key == 'Enter') ||
      (e.target.name == '' && this.selectedLocationName.valid)
    ) {
      if (!this.activeLocations.includes(this.selectedLocationName.value!)) {
        this.assetsStorageService.cleanData();
        this.assetsStorageService.addLocation(this.selectedLocationName.value!);
      }
      this.setActiveLocations();
      this.selectedLocationInventory = this.assetsStorageService.data.get(
        this.selectedLocationName.value!,
      );
    } else if (e.type == 'click') {
      this.assetsStorageService.cleanData();
      this.setActiveLocations();
      if (this.activeLocations.find((loc) => loc === e.target.name)) {
        this.selectedLocationName.setValue(e.target.name);
        this.selectedLocationInventory = this.assetsStorageService.data.get(
          e.target.name,
        );
      } else {
        this.selectedLocationName.setValue('');
        this.selectedLocationInventory = undefined;
      }
    }
  }

  deleteLocation(location: string) {
    if (this.selectedLocationName.value == location)
      this.selectedLocationName.setValue('');
    this.assetsStorageService.deleteLocation(location);
    this.setActiveLocations();
  }

  @HostListener('document:keydown', ['$event'])
  keydown(e: any) {
    if ((e.key == 'Shift' && e.ctrlKey) || (e.key == 'Control' && e.shiftKey))
      this.changeAmount = 24;
    else if (e.key == 'Shift') this.changeAmount = 4;
    else if (e.key == 'Control') this.changeAmount = 16;
    else this.changeAmount = 1;
  }

  @HostListener('document:keyup')
  keyup() {
    this.changeAmount = 1;
  }
}
