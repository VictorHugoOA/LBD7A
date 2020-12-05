import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  archivos: any[] = [];
  numEntregas: number = 0;
  constructor(public auth: AuthService, private al: AlumnosService, private aRouter: ActivatedRoute, private acti: ActividadesService, private router: Router) {


    this.act = this.aRouter.snapshot.params.idm;
    this.a = this.aRouter.snapshot.params.ida;

    if(this.auth.userData.tipo == "Estudiante")
    {
      this.al.getActividadAlumno(this.a, this.act).subscribe((data:any)=> {
        this.actividad = data;
        console.log(this.actividad);
      });
    }
    if(this.auth.userData.tipo == "Profesor"){
      this.acti.getActividad(this.act).subscribe((data: any) => {
        this.actividad = data;
      });
      this.acti.obtenerNumEntregas(this.act).subscribe((data: number) => {this.numEntregas = data});
    }

    this.acti.getActividadMaterial(this.act).subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.archivos.push(data[i]);
      }
    })

  }

  ngOnInit(): void {
  }

}
