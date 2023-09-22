import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexChart,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";
import { DatabaseService } from "src/app/core/services/database.service";
import { ANSWER_IDS } from "src/app/models/answers";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-boxplot-edad-sexo',
  templateUrl: './boxplot-edad-sexo.component.html',
  styleUrls: ['./boxplot-edad-sexo.component.css']
})
export class BoxplotEdadSexoComponent implements OnInit{
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private db: DatabaseService) {
    this.chartOptions = {
      series: [
        {
          type: "boxPlot",
          data: [
            {
              x: "masculino",
              y: [54, 66, 69, 75, 88]
            },
            {
              x: "femenino",
              y: [43, 65, 69, 76, 81]
            },
          ]
        }
      ],
      chart: {
        height: 300,
        width: 380,
        type: "candlestick"
      },
      title: {
        text: "Boxplot edad según sexo",
        align: "left",
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(): void {
    this.db.getAnswersByType(ANSWER_IDS.SEXO).subscribe((data) => {
      this.db.getAnswersByType(ANSWER_IDS.EDAD).subscribe((data2) => {
        console.log(data);
        console.log(data2);
      })})
        
        
  }
}
