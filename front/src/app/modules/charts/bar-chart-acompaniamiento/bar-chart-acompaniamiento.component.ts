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
import { ANSWER_IDS, IAcompaniamiento } from "src/app/models/answers";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-bar-chart-acompaniamiento',
  templateUrl: './bar-chart-acompaniamiento.component.html',
  styleUrls: ['./bar-chart-acompaniamiento.component.css']
})
export class BarChartAcompaniamientoComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private db: DatabaseService) {
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: [0,0,0,0,0,0]
        }
      ],
      chart: {
        height: 300,
        width: 500,
        type: "bar"
      },

      title: {
        text: "Con quienes viajan los turistas",
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      xaxis: {
        categories: ['solo', 'con pareja', 'con familia', 'con amigos', 'en excursión', 'otros']
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
    this.db.getAnswersByType(ANSWER_IDS.ACOMPANIANTE).subscribe((data) => {
      const dataTyped = data as IAcompaniamiento[];
      const newData = dataTyped.reduce((acc, curr) => {
        switch (true) {
          case curr.acom_solo:
            acc[0]++;
            break;
          case curr.acom_pareja:
            acc[1]++;
            break;
          case curr.acom_familia:
            acc[2]++;
            break;
          case curr.acom_amigo:
            acc[3]++;
            break;
          case curr.acom_excursion:
            acc[4]++;
            break;
          default:
            acc[5]++;
            break;
        }
        return acc;
      }, [0, 0, 0, 0,0,0]); 

      this.chartOptions.series = [{
        name: "Cantidad",
        data: newData
      }]
    })
      
  }
}
