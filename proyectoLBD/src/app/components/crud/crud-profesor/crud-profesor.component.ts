import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crud-profesor',
  templateUrl: './crud-profesor.component.html',
  styleUrls: ['./crud-profesor.component.css']
  

})

export class CrudProfesorComponent implements OnInit {

  AltaProfesor: FormGroup
  BajaProfesor: FormGroup
  MostrarProfesor: FormGroup

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
