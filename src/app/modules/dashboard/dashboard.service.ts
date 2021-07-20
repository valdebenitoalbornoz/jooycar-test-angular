import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoxData, Menu } from '../../app.types';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get(`${this.apiUrl}/menu`) as Observable<Menu[]>;
  }
  
  getBoxData() {
    return this.http.get(`${this.apiUrl}/boxes`) as Observable<BoxData[]>;
  }


}
