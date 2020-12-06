import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { GrupoComponent } from '../../grupo/grupo.component';

@Component({
  selector: 'app-crud-libro',
  templateUrl: './crud-libro.component.html',
  styleUrls: ['./crud-libro.component.css']
})
export class CrudLibroComponent implements OnInit {
  AltaLibro: FormGroup

  materias: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
