import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSandboxPageComponent } from './card-sandbox-page.component';

describe('CardSandboxPageComponent', () => {
  let component: CardSandboxPageComponent;
  let fixture: ComponentFixture<CardSandboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSandboxPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSandboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
