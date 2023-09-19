import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartProcedenciaComponent } from './bar-chart-procedencia/bar-chart-procedencia.component';



@NgModule({
  declarations: [
    BarChartProcedenciaComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    BarChartProcedenciaComponent
  ]
})
export class ChartsModule { }
