import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/actividad/actividades.service';
import { Alumno } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
