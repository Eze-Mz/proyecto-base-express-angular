import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './core/guards/login.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { adminGuard } from './core/guards/admin.guard';
import { TablaEncuestasComponent } from './pages/tabla-encuestas/tabla-encuestas.component';
import { CuestionarioTuristasComponent } from './pages/cuestionario-turistas/cuestionario-turistas.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:HomeComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[loginGuard]},
  {path: 'dashboard/resultados', component: ResultadosComponent, canActivate:[adminGuard]},
  {path: 'dashboard/encuestas', component: TablaEncuestasComponent, canActivate:[loginGuard]},
  {path:'dashboard/cuestionario-turista',component:CuestionarioTuristasComponent, canActivate:[loginGuard]},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
