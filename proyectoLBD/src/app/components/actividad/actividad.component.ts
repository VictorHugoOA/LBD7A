import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/actividad/actividades.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  actividad: any;
  calificacion: number;
  constructor() { }

  ngOnInit(): void {
  }

}
