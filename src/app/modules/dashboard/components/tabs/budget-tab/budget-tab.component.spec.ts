import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTabComponent } from './budget-tab.component';

describe('BudgetTabComponent', () => {
  let component: BudgetTabComponent;
  let fixture: ComponentFixture<BudgetTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
