import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { DatabaseService } from "src/app/core/services/database.service";


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
export class BarChartProcedenciaComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private db: DatabaseService) {
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: [0,0,0,0]
        }
      ],
      chart: {
        height: 250,
        width: 400,
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

  ngOnInit(): void {
    this.db.getAnswersByType('procedencia').subscribe((data) => {
      const newData = data.reduce((acc, curr) => {
        if (curr.procedencia === 'córdoba capital') {
          acc[0] += 1;
        } else if (curr.procedencia === 'otra localidad') {
          acc[1] += 1;
        } else if (curr.procedencia === 'otra provincia') {
          acc[2] += 1;
        } else if (curr.procedencia === 'otro país') {
          acc[3] += 1;
        }
        return acc;
      }, [0, 0, 0, 0]);

      this.chartOptions.series = [{
        name: "Cantidad",
        data: newData
      }]
    })
      
  }
}
