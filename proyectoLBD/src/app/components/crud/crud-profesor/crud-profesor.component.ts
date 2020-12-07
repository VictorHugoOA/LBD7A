import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-crud-profesor',
  templateUrl: './crud-profesor.component.html',
  styleUrls: ['./crud-profesor.component.css']
  

})

export class CrudProfesorComponent implements OnInit {

  AltaProfesor: FormGroup

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    this.AltaProfesor = this.fb.group({
        id: ['', [Validators.required, Validators.pattern("p+[0-9]*$"), Validators.maxLength(10)]],
        nombre: ['', Validators.required],
        paterno: ['', Validators.required],
        materno: ['', Validators.required],
        telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        correo: ['', [Validators.required, Validators.pattern("^[a-zA-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
        sexo: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  onSubmit()
  {
    console.log(this.AltaProfesor);
    if(this.AltaProfesor.valid)
    {
      this.crud.insertarProfe(this.AltaProfesor.get('id').value,
      this.AltaProfesor.get('nombre').value,
      this.AltaProfesor.get('paterno').value,
      this.AltaProfesor.get('materno').value,
      this.AltaProfesor.get('telefono').value,
      this.AltaProfesor.get('correo').value,
      this.AltaProfesor.get('sexo').value,
      this.AltaProfesor.get('password').value).subscribe((data: any) =>{
        this.toast.success("Se han ingresado los datos del profesor con éxito", "Alta profesor");
        this.router.navigateByUrl('/login');
      }, (error: any) =>{
        this.toast.error("Ocurrió un error en el sistema. Lo más probable es que haya ingresado un id duplicado", "Error");
      });
    }
  }

}
