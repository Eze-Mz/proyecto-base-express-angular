import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexResponsive
} from "ng-apexcharts";
import { DatabaseService } from "src/app/core/services/database.service";
import { ANSWER_IDS, IProcedencia } from "src/app/models/answers";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
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
        height: 300,
        width: 500,
        type: "bar"
      },

      title: {
        text: "Procedencia de los turistas",
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      xaxis: {
        categories: ['córdoba capital', 'otra localidad', 'otra provincia', 'otro país']
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width: 350
            },
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: 450
            },
          }
        }
      ]
    };
  }

  ngOnInit(): void {
    this.db.getAnswersByType(ANSWER_IDS.PROCEDENCIA).subscribe((data) => {
      const dataTyped =  data as IProcedencia[];
      const newData = dataTyped.reduce((acc, curr) => {
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
