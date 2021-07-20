import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryBoxComponent } from './home-summary-box.component';

describe('HomeSummaryBoxComponent', () => {
  let component: HomeSummaryBoxComponent;
  let fixture: ComponentFixture<HomeSummaryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSummaryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSummaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
