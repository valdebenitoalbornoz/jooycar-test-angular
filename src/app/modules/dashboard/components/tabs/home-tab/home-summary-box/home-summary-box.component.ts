import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-summary-box',
  templateUrl: './home-summary-box.component.html',
  styleUrls: ['./home-summary-box.component.css']
})
export class HomeSummaryBoxComponent implements OnInit {
  @Input() amount = 0;
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
