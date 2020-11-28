import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/actividad/actividades.service';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actividades: Activity[] = [];

  alumno: any;

  constructor(private auth: AuthService, private al: AlumnosService) {
    this.al.getAlumno(this.auth.userData.id).subscribe((data:any)=>console.log(data));
   }

  ngOnInit(): void {
  }

}
