import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = true;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.show = !this.show;
  }
}
