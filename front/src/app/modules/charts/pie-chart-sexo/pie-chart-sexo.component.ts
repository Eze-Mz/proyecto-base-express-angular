import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { DatabaseService } from "src/app/core/services/database.service";
import { ANSWER_IDS, ISexo } from "src/app/models/answers";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  title: ApexTitleSubtitle;
  labels: any;
};

@Component({
  selector: 'app-pie-chart-sexo',
  templateUrl: './pie-chart-sexo.component.html',
  styleUrls: ['./pie-chart-sexo.component.css']
})
export class PieChartSexoComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private db: DatabaseService) {
    this.chartOptions = {
      series: [50,50],
      chart: {
        height: 300,
        width: 380,
        type: "pie"
      },
      title: {
        text: "Sexo de los turistas",
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      labels: ["masculino", "femenino"],
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
      ],
    };
  }

  ngOnInit(): void {
    this.db.getAnswersByType(ANSWER_IDS.SEXO).subscribe((data) => {
      const dataTyped =  data as ISexo[];
      const newData = dataTyped.reduce((acc, curr) => {
        if (curr.sexo === 'masculino') {
          acc[0] += 1;
        } else if (curr.sexo === 'femenino') {
          acc[1] += 1;
        } 
        return acc;
      }, [0, 0]);

      this.chartOptions.series = newData
    })
      
  }
}
