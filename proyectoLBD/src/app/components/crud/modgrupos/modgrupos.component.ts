import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modgrupos',
  templateUrl: './modgrupos.component.html',
  styleUrls: ['./modgrupos.component.css']
})
export class ModgruposComponent implements OnInit {
  modGrupo: FormGroup;
  grupo: Observable<any>;
  profesores: any[] = [];
  
  AltaGrupo: FormGroup;
  constructor(private crud: CrudService, private fb: FormBuilder, private router: Router, private toast: ToastrService) {
    this.crud.getProfesores().subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.profesores.push(data[i]);
      }
    })  
  }

  buscar(id:string){
    this.grupo = this.crud.getGrupo(id);
    this.grupo.subscribe((data: any) => {
      this.modGrupo.setValue({id: data.id, clase: data.clase, grado: data.grado, profesor: data.id_profesor, ciclo_final: data.ciclo_final, ciclo_inicio: data.ciclo_inicio})
    })

  }
  ngOnInit(): void {
    this.modGrupo = this.fb.group({
      id: ['', Validators.required],
      grado: ['', Validators.required],
      clase: ['', Validators.required],
      profesor: ['', Validators.required],
      ciclo_inicio: ['', Validators.required],
      ciclo_final: ['', Validators.required]
    });
  }

  onSubmit(){
    
    if(this.modGrupo.valid)
    {
      
      this.crud.setGrupo(
        this.modGrupo.get('id').value, 
        this.modGrupo.get('grado').value, 
        this.modGrupo.get('clase').value, 
        this.modGrupo.get('profesor').value, 
        this.modGrupo.get('ciclo_inicio').value, 
        this.modGrupo.get('ciclo_final').value).subscribe((data: any) =>{
          this.toast.success("Se ha modificado el grupo en la base de datos", "Modificar Grupo");
          this.router.navigateByUrl('/admin');
        });
     // this.router.navigate(['/login']);
     //poner navigate
    }
  }

  borrar()
  {
    this.crud.borrarGrupo(this.modGrupo.get('id').value).subscribe((data: any) =>{
      this.toast.success("Se ha borrado el grupo de al base de datos", "Borrar grupo")
      this.router.navigateByUrl('/admin');
    });
  }

}
