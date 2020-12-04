import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent implements OnInit {

  archivos: any[] = [];

  actividad: string;
  actividadData: any;

  alumno: string;
  alumnoData: any;

  calificar: FormGroup;

  constructor(private act: ActividadesService, private aRouter: ActivatedRoute, private al: AlumnosService, private fb: FormBuilder, private router: Router) {
    this.actividad = this.aRouter.snapshot.params.idAct;
    this.alumno = this.aRouter.snapshot.params.idAl;
    this.act.obtenerArchivosActividadAlumno(this.alumno, this.actividad).subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.archivos.push(data[i]);
      }
    });

    this.al.getAlumno(this.alumno).subscribe((data:any) =>{
      this.alumnoData = data;
    });
    this.act.getActividad(this.actividad).subscribe((data:any)=>{
      console.log(data);
      this.actividadData = data;
    });
  }

  onSubmit()
  {
    if(this.calificar.valid)
    {
      this.al.setCalificacion(this.alumno, this.actividad, this.calificar.get('calificacion').value, this.calificar.get('comentario').value).subscribe();
      this.router.navigate([`/listaentrega/${this.actividad}`]);
    }
  }

  ngOnInit(): void {
    this.calificar = this.fb.group({
      calificacion: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

}
