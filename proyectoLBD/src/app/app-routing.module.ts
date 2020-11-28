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


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component:PrincipalComponent},
  {path:'curso', component: CursosComponent},
  {path:'alumnos/:id', component: AlumnosComponent},
  {path:'perfil', component: PerfilComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: MateriaComponent},
  {path: 'actividad/:id', component: ActividadComponent},
  {path: 'homeTeacher', component: MaestroMateriasComponent},
  {path: 'crear/:id', component: CrearActividadComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
