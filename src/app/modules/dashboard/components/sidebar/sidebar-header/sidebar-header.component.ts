import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.css']
})
export class SidebarHeaderComponent implements OnInit {
  counter = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
