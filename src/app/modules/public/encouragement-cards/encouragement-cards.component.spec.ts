import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncouragementCardsComponent } from './encouragement-cards.component';

describe('EncouragementCardsComponent', () => {
  let component: EncouragementCardsComponent;
  let fixture: ComponentFixture<EncouragementCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncouragementCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncouragementCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
