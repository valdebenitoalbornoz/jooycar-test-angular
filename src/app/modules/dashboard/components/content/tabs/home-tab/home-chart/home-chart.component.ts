import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent
} from "ng-apexcharts";


@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.css']
})
export class HomeChartComponent implements OnInit {
  @Input() chartOptions: any;
  @ViewChild("chart") chart?: ChartComponent;
  constructor() {
    
  }
  
  ngOnInit(): void {
  }

}
