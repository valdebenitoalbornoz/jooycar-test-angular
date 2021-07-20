import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHeaderUserComponent } from './sidebar-header-user.component';

describe('SidebarHeaderUserComponent', () => {
  let component: SidebarHeaderUserComponent;
  let fixture: ComponentFixture<SidebarHeaderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarHeaderUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHeaderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
