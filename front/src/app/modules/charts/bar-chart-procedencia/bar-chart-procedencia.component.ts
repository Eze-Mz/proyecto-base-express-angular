import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bar-chart-procedencia',
  templateUrl: './bar-chart-procedencia.component.html',
  styleUrls: ['./bar-chart-procedencia.component.css']
})
export class BarChartProcedenciaComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        type: "bar"
      },

      title: {
        text: "Procedencia de los turistas"
      },
      xaxis: {
        categories: ['córdoba capital', 'otra localidad', 'otra provincia', 'otro país']
      }
    };
  }
}
