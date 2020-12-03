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
import { ArchivosComponent } from './components/archivos/archivos.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'curso', component: CursosComponent},
  {path:'alumnos/:id', component: AlumnosComponent},
  {path:'perfil/:id/:tipo', component: PerfilComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'home', component: PrincipalComponent},
  {path: 'curso/:idg/:idm', component: MateriaComponent},
  {path: 'actividad/:ida/:idm', component: ActividadComponent},
  {path: 'homeTeacher', component: InicioprofComponent},
  {path: 'crear/:id', component: CrearActividadComponent},
  {path: 'entrega/:ida/:idm', component: EntregaComponent},
  {path: 'editar/:ida/:idm', component: EditarComponent},
  {path: 'editaractividad/:ida', component: EditarActividadComponent},
  {path: 'grupo', component: GrupoComponent},
  {path: 'libro', component: LibroComponent},
  {path: 'calificaciones/:idm', component: CalificacionesComponent},
  {path: 'archivo/:idm', component: ArchivosComponent},
  {path: 'profile/:id/:tipo', component: PerfilOtroComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
