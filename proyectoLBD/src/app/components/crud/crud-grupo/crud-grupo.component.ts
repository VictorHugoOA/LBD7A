import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crud-grupo',
  templateUrl: './crud-grupo.component.html',
  styleUrls: ['./crud-grupo.component.css']
})
export class CrudGrupoComponent implements OnInit {
  AltaGrupo: FormGroup
  BajaGrupo: FormGroup
  MostrarGrupo: FormGroup
  
  
  constructor() {
    
    
   }

  ngOnInit(): void {
  }

}
