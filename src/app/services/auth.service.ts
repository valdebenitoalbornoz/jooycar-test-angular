import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public source = new BehaviorSubject<boolean>(false);
  public isLogged$ = this.source.asObservable();
  constructor() { }

  login() {
    this.source.next(true);
  }
  
  logout() {
    this.source.next(false);
  }
}
