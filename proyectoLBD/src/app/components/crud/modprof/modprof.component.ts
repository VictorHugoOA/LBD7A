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

  AltaProfesor: FormGroup
  profesor: Observable<any>;
  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) { }

  buscar(id:string){
    this.profesor= this.crud.getProfesor(id);


  }
  ngOnInit(): void {
    this.AltaProfesor = this.fb.group({
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
    if(this.AltaProfesor.valid)
    {
      this.crud.insertarProfesor(this.AltaProfesor.get('id').value,
      this.AltaProfesor.get('nombre').value,
      this.AltaProfesor.get('paterno').value,
      this.AltaProfesor.get('materno').value,
      this.AltaProfesor.get('telefono').value,
      this.AltaProfesor.get('correo').value,
      this.AltaProfesor.get('sexo').value,
      this.AltaProfesor.get('password').value).subscribe((data: any) =>{
        this.router.navigate(['/router']);
      });
    }
  }


}
