import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiService } from './core/http/api.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: ChartOptions;
  data: [number]= [0];

  constructor(private apiService: ApiService) {
    this.chartOptions = {
      series: [
        {
          name: "Roles usuarios",
          data: this.data
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        width: 500
      },
      title: {
        text: "Cantidad roles usuarios"
      },
      xaxis: {
        categories: ["Admin", "User"]
      }}
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.apiService.get<any>("test").subscribe((data) => {
      let admin = 0;
      let user = 0;
      data.forEach((element: any) => {
        if (element.role == "ADMIN") {
          admin++;
        } else {
          user++;
        }
      });
      this.data.pop();
      this.data.push(admin);
      this.data.push(user);
      console.log(this.chart);
      console.log(this.data);
      
      this.chart?.updateSeries([{
        data: this.data
      }], true);
    });
  }
}
