import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private activity: ActividadesService) { }

  actividadForm: FormGroup;
  materia: string;

  ngOnInit(): void {

    this.materia = this.router.snapshot.params.id;
    this.actividadForm = this.fb.group({
      fechaLim: [new Date(), [Validators.required]],
      descripción: ['', [Validators.required]] 
    });
  }

  onSubmit()
  {
    if(this.actividadForm.valid)
    {
      if(this.actividadForm.get('fechaLim').value > new Date())
      {
      }
    }
  }

}
