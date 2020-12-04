import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService, Activity } from 'src/app/services/actividad/actividades.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: any[] = [];
  actividad: string;
  constructor(private act: ActividadesService, private aRouter: ActivatedRoute) {
    this.actividad = aRouter.snapshot.params.id;
    this.act.getAlumnosEntrega(this.actividad).subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.alumnos.push(data[i]);
      }
    })
  }

  ngOnInit(): void {

  }

}
