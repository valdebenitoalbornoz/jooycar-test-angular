import { Component, OnInit } from '@angular/core';
import { BoxData, Menu } from 'src/app/app.types';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { boxes } from 'src/app/data';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {
  public boxes: BoxData[] = [];
  public chartOptions: any = {
    series: [
      {
        name: 'Serie 1',
        data: [ 10, 9.05, 8.8, 9.2, 4,8, 9.1, 17 ],
        type: 'column'
      },
      {
        name: 'Serie 2',
        data: [ 42, 28, 43, 34, 20, 25, 22 ],
        type: 'line',

      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [ 1 ]
    },
    title: {
      text: ""
    },
    xaxis: {
      categories: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: '#e8e8e8',
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: '#e8e8e8',
        }
      },
    },
    yaxis: {
      max: 45,
      type: 'numeric'
    }
  };
  constructor(private _service: DashboardService) { }

  ngOnInit(): void {
    this.getBoxes();
  }

  getBoxes() {
    this._service.getBoxData()
      .subscribe((data: BoxData[]) => {
        this.boxes = data;
      }, err => {
        console.log(err);
        this.boxes = boxes;
      });
  }

}
