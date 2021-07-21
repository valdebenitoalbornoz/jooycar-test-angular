import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/app.types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() menu: Menu[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
