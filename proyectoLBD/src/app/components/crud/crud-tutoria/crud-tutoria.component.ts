import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-crud-tutoria',
  templateUrl: './crud-tutoria.component.html',
  styleUrls: ['./crud-tutoria.component.css']
})
export class CrudTutoriaComponent implements OnInit {
  BajaTutoria: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
