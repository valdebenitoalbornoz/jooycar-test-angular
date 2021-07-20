import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBoxComponent } from './summary-box.component';

describe('SummaryBoxComponent', () => {
  let component: SummaryBoxComponent;
  let fixture: ComponentFixture<SummaryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
