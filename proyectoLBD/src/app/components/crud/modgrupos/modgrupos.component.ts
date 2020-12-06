import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modgrupos',
  templateUrl: './modgrupos.component.html',
  styleUrls: ['./modgrupos.component.css']
})
export class ModgruposComponent implements OnInit {
  AltaGrupo: FormGroup;
  grupo: Observable<any>;
  profesores: any[] = [];
  
  constructor(private crud: CrudService, private fb: FormBuilder, private router: Router) {
    this.crud.getProfesores().subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.profesores.push(data[i]);
      }
    })  
  }

  buscar(id:string){
    this.grupo = this.crud.getGrupo(id);

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
      this.crud.insertarGrupo(
        this.AltaGrupo.get('id').value, 
        this.AltaGrupo.get('grado').value, 
        this.AltaGrupo.get('clase').value, 
        this.AltaGrupo.get('profesor').value, 
        this.AltaGrupo.get('ciclo_inicio').value, 
        this.AltaGrupo.get('ciclo_final').value).subscribe()
      this.router.navigate(['/login']);
    }
  }
}
