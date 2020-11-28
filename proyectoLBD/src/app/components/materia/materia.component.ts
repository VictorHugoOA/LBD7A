import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso, CursosService } from 'src/app/services/cursos/cursos.service';

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
  constructor(public auth: AuthService, private router: Router, private aRouter: ActivatedRoute, private c: CursosService) {
    this.grupo = this.aRouter.snapshot.params.idg;
    this.materia = this.aRouter.snapshot.params.idm;

  }

  routerActivity()
  {
    this.router.navigate([`/crear/${this.materia}`])
  }

  ngOnInit(): void {
    this.curso = this.c.getCurso(this.materia);
  }

}
