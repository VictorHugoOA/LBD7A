import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-crud-alumno',
  templateUrl: './crud-alumno.component.html',
  styleUrls: ['./crud-alumno.component.css']
})
export class CrudAlumnoComponent implements OnInit {

  AltaAlumno: FormGroup;
  grupos: any[] = []

  constructor(private fb: FormBuilder, private crud: CrudService) {
    this.crud.getGrupos().subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.grupos.push(data[i]);
      }
    })
  }

  ngOnInit(): void {
    this.AltaAlumno = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("a+[0-9]*$"), Validators.maxLength(10)]],
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      sexo: ['', Validators.required],
      password: ['', Validators.required],
      grupo: ['', Validators.required]
    });
  }

  onSubmit()
  {
    console.log(this.AltaAlumno);
  }

}
