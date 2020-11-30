import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  alumno: Observable<any>;
  profesor: Observable<any>;

  constructor(public auth: AuthService, private router: Router, private al: AlumnosService, private prof:ProfesorService) { 
  }

  ngOnInit(): void {
    this.profesor = this.prof.getProfesor(this.auth.userData.id);
    this.alumno = this.al.getAlumno(this.auth.userData.id);
  }

  logOut(){
    this.auth.signOut();
    this.router.navigate(['/login'])
  }

}
