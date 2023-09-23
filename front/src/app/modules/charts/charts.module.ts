import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartProcedenciaComponent } from './bar-chart-procedencia/bar-chart-procedencia.component';
import { PieChartSexoComponent } from './pie-chart-sexo/pie-chart-sexo.component';
import { BoxplotEdadSexoComponent } from './boxplot-edad-sexo/boxplot-edad-sexo.component';
import { BarChartAcompaniamientoComponent } from './bar-chart-acompaniamiento/bar-chart-acompaniamiento.component';



@NgModule({
  declarations: [
    BarChartProcedenciaComponent,
    PieChartSexoComponent,
    BoxplotEdadSexoComponent,
    BarChartAcompaniamientoComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    BarChartProcedenciaComponent,
    BarChartAcompaniamientoComponent,
    BoxplotEdadSexoComponent,
    PieChartSexoComponent
  ]
})
export class ChartsModule { }
