import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ActividadesService, Activity } from 'src/app/services/actividad/actividades.service';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  act: string;
  a: string;
  bandera: boolean = true;

  now: Date = new Date();

  actividad: any = {};
  constructor(public auth: AuthService, private al: AlumnosService, private aRouter: ActivatedRoute, private acti: ActividadesService) {

    this.act = this.aRouter.snapshot.params.idm;
    this.a = this.aRouter.snapshot.params.ida;

    if(this.auth.userData.tipo == "Estudiante")
    {
      this.al.getActividadAlumno(this.a, this.act).subscribe((data:any)=> {
        this.actividad = data;
      });
    }
    if(this.auth.userData.tipo == "Profesor"){
      this.acti.getActividad(this.act).subscribe((data: any) => {
        this.actividad = data;
      });
    }
  }

  ngOnInit(): void {
  }

}
