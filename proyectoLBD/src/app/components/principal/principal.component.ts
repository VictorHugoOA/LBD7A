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

  constructor(public auth: AuthService, private al: AlumnosService) {
    this.al.getPendientes(this.auth.userData.id).subscribe((data:any[]) => {
      for(var i = 0; i < data.length; i++){
        this.actividades.push(data[i]);
        console.log(data[i]);
      }
    });
  }

  ngOnInit(): void {
  }

}
