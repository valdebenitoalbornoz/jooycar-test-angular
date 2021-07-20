import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/app.types';
import { DashboardService } from 'src/app/services/dashboard.service';
import { menu } from 'src/app/data';

@Component({
  selector: 'app-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrls: ['./sidebar-body.component.css']
})
export class SidebarBodyComponent implements OnInit {
  menu: Menu[] = [];
  constructor(private _service: DashboardService) { }

  ngOnInit(): void {
    this._service.getMenu()
      .subscribe((_menu: Menu[]) => {
        this.menu = _menu;
      }, error => {
        this.menu = menu;
      })
  }

}
