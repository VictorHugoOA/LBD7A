import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pbar',
  templateUrl: './pbar.component.html',
  styleUrls: ['./pbar.component.css']
})
export class PbarComponent implements OnInit {

  alumno: Observable<any>;

  constructor(private auth: AuthService, private al: AlumnosService, private router: Router) {
<<<<<<< Updated upstream
    this.alumno = this.al.getAlumno(this.auth.userData.id).pipe(map(val => {return val[0]}));
  }

  ngOnInit(): void {
=======
      this.alumno = this.al.getAlumno(this.auth.userData.id).pipe(map(val => {return val[0]}));
  }

  ngOnInit(): void {
  
>>>>>>> Stashed changes
  }

  logOut(){
    this.auth.signOut();
    this.router.navigate(['/login'])
  }

}
