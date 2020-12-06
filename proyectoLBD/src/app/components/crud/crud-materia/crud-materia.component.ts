import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud/crud.service';
@Component({
  selector: 'app-crud-materia',
  templateUrl: './crud-materia.component.html',
  styleUrls: ['./crud-materia.component.css']
})
export class CrudMateriaComponent implements OnInit {

  AltaMateria: FormGroup;
  constructor(private fb: FormBuilder, private crud: CrudService) {


  }

  ngOnInit(): void {
    this.AltaMateria = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("m-+[0-9]*$"), Validators.maxLength(10)]],
      nombre: ['', Validators.required],
      campo: ['', Validators.required],
      nivel: ['', Validators.required]
    });
  }

  onSubmit()
  {
    if(this.AltaMateria.valid)
    {
      this.crud.insertarMateria(this.AltaMateria.get('id').value,
      this.AltaMateria.get('nombre').value,
      this.AltaMateria.get('campo').value,
      this.AltaMateria.get('nivel').value).subscribe();
    }
  }

}
