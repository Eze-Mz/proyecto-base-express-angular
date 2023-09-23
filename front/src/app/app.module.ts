import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from './modules/charts/charts.module';
<<<<<<< HEAD
import { CuestionarioTuristasComponent } from './shared/cuestionario-turistas/cuestionario-turistas.component';

=======
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { TablaEncuestasComponent } from './pages/tabla-encuestas/tabla-encuestas.component';
>>>>>>> f294bfe067e08de1fa0fd822160d6f16407d83d8


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
<<<<<<< HEAD
    CuestionarioTuristasComponent
=======
    HomeComponent,
    NotFoundComponent,
    ResultadosComponent,
    TablaEncuestasComponent,
>>>>>>> f294bfe067e08de1fa0fd822160d6f16407d83d8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
