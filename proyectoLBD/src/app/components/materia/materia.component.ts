import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActividadesService, Activity } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {


  curso: Observable<any>;
  actividades: Activity[] = [];  

  grupo: string;
  materia: string;
  constructor(public auth: AuthService, private router: Router, private aRouter: ActivatedRoute, private c: CursosService, private act: ActividadesService) {
    this.grupo = this.aRouter.snapshot.params.idg;
    this.materia = this.aRouter.snapshot.params.idm;

  }

  routerActivity()
  {
    this.act.crearActividad(this.materia).subscribe((data: any) => {
      this.router.navigate([`/crear/${this.materia}/${data.id}`]);
    });
  }
 
  ngOnInit(): void {
    this.curso = this.c.getCurso(this.materia);
    this.act.getActividadesGrupo(this.materia, this.grupo).subscribe((data: any[]) => {
      console.log(data);
      for(var i = 0; i < data.length; ++i)
      {
        this.actividades.push(data[i]);
      }
    });
  }

}
