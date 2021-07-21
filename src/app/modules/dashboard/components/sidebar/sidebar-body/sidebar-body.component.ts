import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/app.types';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrls: ['./sidebar-body.component.css']
})
export class SidebarBodyComponent implements OnInit {
  @Input() menu: Menu[] = [];
  constructor(private _service: DashboardService) { }

  ngOnInit(): void {
  }

}
