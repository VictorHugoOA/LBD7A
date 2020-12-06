import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-crud-materia',
  templateUrl: './crud-materia.component.html',
  styleUrls: ['./crud-materia.component.css']
})
export class CrudMateriaComponent implements OnInit {

  AltaMateria: FormGroup;
  constructor(private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.AltaMateria = this.fb.group({});
  }

}
