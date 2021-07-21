import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/app.types';
import { menu } from 'src/app/data';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = localStorage.getItem('sidebar-show') === 'on';
  menu: Menu[] = [];
  constructor(private _service: DashboardService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  onToggle() {
    this.show = !this.show;
    // FIXME: It should be better for persistence:
    localStorage.setItem('sidebar-show', this.show ? 'on' : 'off');
  }

  getMenu() {
    this._service.getMenu()
      .subscribe((_menu: Menu[]) => {
        this.menu = _menu;
      }, error => {
        this.menu = menu;
      })
  }
}
