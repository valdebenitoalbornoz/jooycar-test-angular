import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/** (Fake Login Service) */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged = localStorage.getItem('token') !== null;
  public source = new BehaviorSubject<boolean>(this.isLogged);
  public isLogged$ = this.source.asObservable();
  constructor() { }

  login() {
    localStorage.setItem('token', Math.random().toString(36).slice(2))
    this.isLogged = true;
    this.next();
  }
  
  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.next();
  }
  
  next() {
    this.source.next(this.isLogged);
  }
}
