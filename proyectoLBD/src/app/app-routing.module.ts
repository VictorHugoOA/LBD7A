import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { MaestroMateriasComponent } from './components/maestro-materias/maestro-materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CrearActividadComponent } from './components/crear-actividad/crear-actividad.component';
import { EntregaComponent } from './components/entrega/entrega.component';
import { EditarComponent } from './components/editar/editar.component';
import { InicioprofComponent } from './components/inicioprof/inicioprof.component';
import { EditarActividadComponent } from './components/editar-actividad/editar-actividad.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { LibroComponent } from './components/libro/libro.component';
import { PerfilOtroComponent } from './components/perfil-otro/perfil-otro.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { CalificarComponent } from './components/calificar/calificar.component';
import { AgregararchComponent } from './components/agregararch/agregararch.component';
import { ProfeTutoriaComponent } from './components/profe-tutoria/profe-tutoria.component';
import { CrearTutoriaProfesorComponent } from './components/crear-tutoria-profesor/crear-tutoria-profesor.component';
import { AlTutoriasSolicitarComponent } from './components/al-tutorias-solicitar/al-tutorias-solicitar.component';
import { ResponderComponent } from './components/responder/responder.component';
import { CrearArchivoTutoriaComponent } from './components/crear-archivo-tutoria/crear-archivo-tutoria.component';
import { ArchivosTutoriaComponent } from './components/archivos-tutoria/archivos-tutoria.component';
import { CrudComponent } from './components/crud/crud.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'curso', component: CursosComponent },
  { path: 'listaentrega/:id', component: AlumnosComponent },
  { path: 'perfil/:id/:tipo', component: PerfilComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'home', component: PrincipalComponent },
  { path: 'curso/:idg/:idm', component: MateriaComponent },
  { path: 'actividad/:ida/:idm', component: ActividadComponent },
  { path: 'homeTeacher', component: InicioprofComponent },
  { path: 'crear/:id/:ida/:idg', component: CrearActividadComponent },
  { path: 'entrega/:ida/:idm', component: EntregaComponent },
  { path: 'editar/:ida/:idm', component: EditarComponent },
  { path: 'editaractividad/:ida', component: EditarActividadComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'libro', component: LibroComponent },
  { path: 'calificaciones/:idm', component: CalificacionesComponent },
  { path: 'profile/:id/:tipo', component: PerfilOtroComponent },
  { path: 'archivos/:idm/:idp', component: ArchivoComponent },
  { path: 'calificar/:idAct/:idAl', component: CalificarComponent },
  { path: 'añadirarchivos/:idMat/:idGrupo', component: AgregararchComponent },
  { path: 'tutoria', component: AlTutoriasSolicitarComponent },
  { path: 'solicitarTutoria', component: CrearTutoriaProfesorComponent },
  { path: 'revisarTutoria/:id', component: ProfeTutoriaComponent },
  { path: 'responder/:id', component: ResponderComponent },
  { path: 'archivoTutoria/:id', component: CrearArchivoTutoriaComponent },
  { path: 'materialTutoria/:id', component: ArchivosTutoriaComponent },
  {path: 'admin', component: CrudComponent},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
