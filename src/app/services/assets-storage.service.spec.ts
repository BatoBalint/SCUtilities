import { TestBed } from '@angular/core/testing';

import { AssetsStorageService } from './assets-storage.service';

describe('AssetsStorageService', () => {
  let service: AssetsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
