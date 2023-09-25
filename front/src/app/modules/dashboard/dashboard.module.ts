import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TablaEncuestasComponent } from './tabla-encuestas/tabla-encuestas.component';
import { CuestionarioTuristasComponent } from './cuestionario-turistas/cuestionario-turistas.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from '../charts/charts.module';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ResultadosComponent,
    TablaEncuestasComponent,
    CuestionarioTuristasComponent,
    NavComponent,
    MenuOpcionesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class DashboardModule { }
