import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PrincipalComponent } from './components/principal/principal.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component:PrincipalComponent},
  {path:'curso', component: CursosComponent},
  {path:'alumnos', component: AlumnosComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
