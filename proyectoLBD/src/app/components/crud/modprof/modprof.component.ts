import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modprof',
  templateUrl: './modprof.component.html',
  styleUrls: ['./modprof.component.css']
})
export class ModprofComponent implements OnInit {

  modProfesor: FormGroup
  profesor: Observable<any>;
  AltaProfesor: FormGroup;
  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) { }

  buscar(id:string){
    this.profesor= this.crud.getProfesor(id);


  }
  ngOnInit(): void {
    this.modProfesor = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("p+[0-9]*$"), Validators.maxLength(10)]],
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      sexo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit()
  {
    if(this.modProfesor.valid)
    {
      this.crud.setProfesor(this.modProfesor.get('id').value,
      this.modProfesor.get('nombre').value,
      this.modProfesor.get('paterno').value,
      this.modProfesor.get('materno').value,
      this.modProfesor.get('telefono').value,
      this.modProfesor.get('correo').value,
      this.modProfesor.get('sexo').value,
      this.modProfesor.get('password').value).subscribe((data: any) =>{
        //this.router.navigate(['/router']);
      });
          /*poner navigate*/
    }
  }


}
