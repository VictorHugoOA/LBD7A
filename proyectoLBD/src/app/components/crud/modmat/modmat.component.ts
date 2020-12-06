import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private fb: FormBuilder, private crud: CrudService, private toast: ToastrService, private router: Router) {


  }
  buscar(id:string){
    this.materia = this.crud.getMateria(id);
    this.materia.subscribe((data: any) =>{
      this.modMateria.setValue({id: data.id, nombre: data.nombre, campo: data.campo, nivel: data.nivel});
    })

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
     this.crud.setMateria(this.modMateria.get('id').value,
      this.modMateria.get('nombre').value,
      this.modMateria.get('campo').value,
      this.modMateria.get('nivel').value).subscribe((data: any) =>{
        this.toast.success("Se han modificado la materia de la base de datos", "Modificar Materia");
        this.router.navigateByUrl('/admin');
      });
      /*poner navigate*/
      
    }
  }

  borrar()
  {
    this.crud.borrarMateria(this.modMateria.get('id').value).subscribe((data: any) =>{
      this.toast.success("Se ha borrado la materia de la base de datos", "Borrar Materia");
      this.router.navigateByUrl('/admin');
    });
  }

}
