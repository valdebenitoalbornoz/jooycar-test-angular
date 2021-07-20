import { Component, Input, OnInit } from '@angular/core';
import { BoxData, HomeColor } from 'src/app/app.types';

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.css']
})
export class SummaryBoxComponent implements OnInit {
  @Input() box?: BoxData;
  @Input() color: HomeColor = null;
  constructor() { }


  ngOnInit(): void {
  }

}
