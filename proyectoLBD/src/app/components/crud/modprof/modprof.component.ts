import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router, private toast: ToastrService) { }

  buscar(id:string){
    this.profesor= this.crud.getProfesor(id);
    this.profesor.subscribe((data: any) =>{
      this.modProfesor.setValue({id: data.id, nombre: data.nombre, paterno: data.apellido_pat, materno: data.apellido_mat, telefono: data.telefono, correo: data.correo, sexo: data.sexo, password: data.contrasena});
    })


  }
  ngOnInit(): void {
    this.modProfesor = this.fb.group({
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
    console.log(this.modProfesor);
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
        this.toast.success("Se ha modificado el profesor de la base de datos", "Modificar Profesor");
        this.router.navigateByUrl('/admin');
      });
          /*poner navigate*/
    }
  }

   
  borrar()
  {
    this.crud.borrarProfesor(this.modProfesor.get('id').value).subscribe((data: any) =>{
      this.toast.success("Se ha borrado el profesor de la bse de datos", "Borrar Profesor");
      this.router.navigateByUrl('/admin');
    });
  }



}
