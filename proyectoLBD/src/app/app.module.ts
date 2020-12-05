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
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { AuthService } from './services/auth/auth.service';
import { CursoCardComponent } from './components/curso-card/curso-card.component';
import { MateriaComponent } from './components/materia/materia.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { MaestroMateriasComponent } from './components/maestro-materias/maestro-materias.component';
import { CrearActividadComponent } from './components/crear-actividad/crear-actividad.component';
import { AlTutoriasSolicitarComponent } from './components/al-tutorias-solicitar/al-tutorias-solicitar.component';
import { EntregaComponent } from './components/entrega/entrega.component';
import { FileUploadModule } from 'ng2-file-upload';
import { EditarComponent } from './components/editar/editar.component';
import { EditarActividadComponent } from './components/editar-actividad/editar-actividad.component';
import { InicioprofComponent } from './components/inicioprof/inicioprof.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { LibroComponent } from './components/libro/libro.component';
import { PerfilOtroComponent } from './components/perfil-otro/perfil-otro.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { ArchivoCardComponent } from './components/archivo-card/archivo-card.component';
import { AgregararchComponent } from './components/agregararch/agregararch.component';
import { CalificarComponent } from './components/calificar/calificar.component';
import { ProfeTutoriaComponent } from './components/profe-tutoria/profe-tutoria.component';
import { CrearTutoriaProfesorComponent } from './components/crear-tutoria-profesor/crear-tutoria-profesor.component';
import { CrearArchivoTutoriaComponent } from './components/crear-archivo-tutoria/crear-archivo-tutoria.component';
import { ResponderComponent } from './components/responder/responder.component';
import { ArchivosTutoriaComponent } from './components/archivos-tutoria/archivos-tutoria.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudAlumnoComponent } from './components/crud/crud-alumno/crud-alumno.component';
import { CrudMateriaComponent } from './components/crud/crud-materia/crud-materia.component';
import { CrudProfesorComponent } from './components/crud/crud-profesor/crud-profesor.component';
import { CrudGrupoComponent } from './components/crud/crud-grupo/crud-grupo.component';
import { CrudTutoriaComponent } from './components/crud/crud-tutoria/crud-tutoria.component';





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
    PerfilComponent,
    CursoCardComponent,
    MateriaComponent,
    ActividadComponent,
    MaestroMateriasComponent,
    CrearActividadComponent,
    AlTutoriasSolicitarComponent,
    EntregaComponent,
    EditarComponent,
    InicioprofComponent,
    EditarActividadComponent,
    GrupoComponent,
    LibroComponent,
    PerfilOtroComponent,
    CalificacionesComponent,
    PerfilOtroComponent,
    ArchivoComponent,
    ArchivoCardComponent,
    AgregararchComponent,
    CalificarComponent,
    ProfeTutoriaComponent,
    CrearTutoriaProfesorComponent,
    CrearArchivoTutoriaComponent,
    ResponderComponent,
    ArchivosTutoriaComponent,
    CrudComponent,
    CrudAlumnoComponent,
    CrudMateriaComponent,
    CrudProfesorComponent,
    CrudGrupoComponent,
    CrudTutoriaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScheduleModule, RecurrenceEditorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FileUploadModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
