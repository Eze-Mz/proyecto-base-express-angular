import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './core/guards/login.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninComponent } from './auth/signin/signin.component';


const routes: Routes = [
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:HomeComponent},
  {path:'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[loginGuard]},
  {path:'sign-in', component:SigninComponent},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
