import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHeaderNotificationComponent } from './sidebar-header-notification.component';

describe('SidebarHeaderNotificationComponent', () => {
  let component: SidebarHeaderNotificationComponent;
  let fixture: ComponentFixture<SidebarHeaderNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarHeaderNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHeaderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
