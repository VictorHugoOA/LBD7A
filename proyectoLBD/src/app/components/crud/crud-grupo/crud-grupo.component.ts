import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';
import { CrudComponent } from '../crud.component';

@Component({
  selector: 'app-crud-grupo',
  templateUrl: './crud-grupo.component.html',
  styleUrls: ['./crud-grupo.component.css']
})
export class CrudGrupoComponent implements OnInit {
  AltaGrupo: FormGroup;
  
  profesores: any[] = [];
  
  constructor(private crud: CrudService, private fb: FormBuilder, private router: Router) {
    this.crud.getProfesores().subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.profesores.push(data[i]);
      }
    })  
  }

  ngOnInit(): void {
    this.AltaGrupo = this.fb.group({
      id: ['', Validators.required],
      grado: ['', Validators.required],
      clase: ['', Validators.required],
      profesor: ['', Validators.required],
      ciclo_inicio: ['', Validators.required],
      ciclo_final: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.AltaGrupo.valid)
    {
      this.crud.insertarGrupo(this.AltaGrupo.get('id').value, this.AltaGrupo.get('grado').value, this.AltaGrupo.get('clase').value, this.AltaGrupo.get('profesor').value, this.AltaGrupo.get('ciclo_inicio').value, this.AltaGrupo.get('ciclo_final').value).subscribe()
      this.router.navigate(['/login']);
    }
  }

}
