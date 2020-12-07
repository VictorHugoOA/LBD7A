import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-crud-alumno',
  templateUrl: './crud-alumno.component.html',
  styleUrls: ['./crud-alumno.component.css']
})
export class CrudAlumnoComponent implements OnInit {

  AltaAlumno: FormGroup;
  grupos: any[] = []

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router, private toast: ToastrService) {
    this.crud.AllGrupos().subscribe((data: any[]) =>{
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
    if(this.AltaAlumno.valid)
    {
      this.crud.insertarAlumno(this.AltaAlumno.get('id').value,
      this.AltaAlumno.get('nombre').value,
      this.AltaAlumno.get('paterno').value,
      this.AltaAlumno.get('materno').value,
      this.AltaAlumno.get('sexo').value,
      this.AltaAlumno.get('password').value,
      this.AltaAlumno.get('grupo').value).subscribe((data: any) =>{
        this.toast.success("El alumno se añadio a la base de datos", "Alta Alumno");
      }, (error: any) =>{
        this.toast.error("Ocurrió un error en el sistema. Lo más probable es que haya ingresado un id duplicado", "Error");
      });
      this.router.navigateByUrl('/login');
      }
  }

}
