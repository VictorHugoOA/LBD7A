import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {


  curso: Curso;
  actividades: Activity[] = [];  

  constructor(public auth: AuthService, private router: Router) { }

  routerActivity()
  {
    this.router.navigate([`/crear/${this.curso.id}`])
  }

  ngOnInit(): void {
  }

}
