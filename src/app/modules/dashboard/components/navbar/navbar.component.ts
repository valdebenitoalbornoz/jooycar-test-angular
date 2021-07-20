import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.toggle.emit();
  }

  logout() {
    localStorage.clear();
    this._router.navigate([ 'login' ]);
  }

}
