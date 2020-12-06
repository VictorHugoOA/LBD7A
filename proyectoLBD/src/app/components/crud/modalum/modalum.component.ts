import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modalum',
  templateUrl: './modalum.component.html',
  styleUrls: ['./modalum.component.css']
})
export class ModalumComponent implements OnInit {

  modAlumno: FormGroup;
  grupos: any[] = [];
  alumno: Observable<any>;
 
  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router, private toast: ToastrService) {
    this.crud.getGrupos().subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.grupos.push(data[i]);
      }
    })
  }

  buscar(id:string){
    this.alumno = this.crud.getAlumno(id);
    this.alumno.subscribe((data: any) =>{
      this.modAlumno.setValue({id: data.id, nombre: data.nombre, paterno: data.apellido_pat, materno: data.apellido_mat, password: data.contrasena, grupo:data.id_grupo, sexo: data.sexo});
    })

  }

  ngOnInit(): void {
    this.modAlumno = this.fb.group({
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
    if(this.modAlumno.valid)
    {
      console.log("actualizado");
      
      this.crud.setAlumno(this.modAlumno.get('id').value,
      this.modAlumno.get('nombre').value,
      this.modAlumno.get('paterno').value,
      this.modAlumno.get('materno').value,
      this.modAlumno.get('sexo').value,
      this.modAlumno.get('password').value,
      this.modAlumno.get('grupo').value).subscribe((data: any) =>{
        this.toast.success("Se ha modificado el alumno en la base de datos", "Modificar Alumno")
        this.router.navigateByUrl('/admin');
      });
     // this.router.navigate(['/admin']);
     //poner el navigate
    }
  }

  
  borrar()
  {
    this.crud.borrarAlumno(this.modAlumno.get('id').value).subscribe((data: any) =>{
      this.toast.success("Se ha borrado el alumno de la base de datos", "Borrar Alumno");
      this.router.navigateByUrl('/admin');
    });
  }


}
