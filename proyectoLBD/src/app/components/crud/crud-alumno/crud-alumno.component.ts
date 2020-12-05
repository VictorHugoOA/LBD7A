import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crud-alumno',
  templateUrl: './crud-alumno.component.html',
  styleUrls: ['./crud-alumno.component.css']
})
export class CrudAlumnoComponent implements OnInit {

  AltaAlumno: FormGroup
  BajaAlumno: FormGroup
  MostrarAlumno: FormGroup


  constructor() { }

  ngOnInit(): void {
  }

}
