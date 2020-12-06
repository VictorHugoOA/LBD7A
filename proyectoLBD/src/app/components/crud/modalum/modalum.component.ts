import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  AltaAlumno: FormGroup;

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) {
    this.crud.getGrupos().subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.grupos.push(data[i]);
      }
    })
  }

  buscar(id:string){
    this.alumno = this.crud.getAlumno(id);
    console.log(this.alumno);

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
      //Poner sentencia
      /*this.crud.setAlumno(this.AltaAlumno.get('id').value,
      this.modAlumno.get('nombre').value,
      this.modAlumno.get('paterno').value,
      this.modAlumno.get('materno').value,
      this.modAlumno.get('sexo').value,
      this.modAlumno.get('password').value,
      this.modAlumno.get('grupo').value).subscribe();*/
      this.router.navigate(['/admin']);
    }
  }


}
