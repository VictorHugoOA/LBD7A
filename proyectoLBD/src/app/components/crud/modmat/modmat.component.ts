import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modmat',
  templateUrl: './modmat.component.html',
  styleUrls: ['./modmat.component.css']
})
export class ModmatComponent implements OnInit {
 
  materia: Observable<any>;
  profesores: any[] = [];
  modMateria: FormGroup;
  AltaMateria: FormGroup;
  constructor(private fb: FormBuilder, private crud: CrudService) {


  }
  buscar(id:string){
    this.materia = this.crud.getMateria(id);

  }
  ngOnInit(): void {
    this.modMateria = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("m-+[0-9]*$"), Validators.maxLength(10)]],
      nombre: ['', Validators.required],
      campo: ['', Validators.required],
      nivel: ['', Validators.required]
    });
  }

  onSubmit()
  {
    if(this.modMateria.valid)
    {
     /* this.crud.setMateria(this.AltaMateria.get('id').value,
      this.modMateria.get('nombre').value,
      this.modMateria.get('campo').value,
      this.modMateria.get('nivel').value).subscribe();
      poner navigate
      */
    }
  }

}
