import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.toggle.emit();
  }

  logout() {
    this._authService.logout();
  }

}
