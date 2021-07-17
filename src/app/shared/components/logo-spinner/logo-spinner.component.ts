import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-spinner',
  templateUrl: './logo-spinner.component.html',
  styleUrls: ['./logo-spinner.component.css']
})
export class LogoSpinnerComponent implements OnInit {
  @Input() fontSizePt: number = 80;
  constructor() { }

  ngOnInit(): void {
  }

}
