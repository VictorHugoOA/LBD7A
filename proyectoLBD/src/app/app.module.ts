import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//Modulos y componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PbarComponent } from './components/pbar/pbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ActividadCardComponent } from './components/actividad-card/actividad-card.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

//Servicios
import { AuthService } from './services/auth/auth.service';


//Servicios

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PbarComponent,
    PrincipalComponent,
    ActividadCardComponent,
    CalendarioComponent,
    NavbarComponent,
    CursosComponent,
    AlumnosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScheduleModule, RecurrenceEditorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
