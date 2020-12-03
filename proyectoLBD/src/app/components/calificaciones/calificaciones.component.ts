import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  actividades: any[] = [];  
  usuario:any;
  materia:string;

  constructor(public auth: AuthService, public actividad:ActividadesService, private aRouter: ActivatedRoute) {
    this.usuario=auth.userData.id;
    this.materia = this.aRouter.snapshot.params.idm;
   }

  ngOnInit(): void {

    this.actividad.getactividadesAlumno(this.usuario,this.materia).subscribe((data: any[]) => {
      console.log(data);
      for(var i = 0; i < data.length; ++i)
      {
        this.actividades.push(data[i]);
      }
    });
  }

}
