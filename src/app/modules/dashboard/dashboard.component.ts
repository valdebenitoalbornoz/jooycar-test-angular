import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = localStorage.getItem('sidebar-show') === 'on';
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.show = !this.show;
    // FIXME: It should be better:
    localStorage.setItem('sidebar-show', this.show ? 'on' : 'off');
  }
}
