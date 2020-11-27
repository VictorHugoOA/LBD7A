import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-maestro-materias',
  templateUrl: './maestro-materias.component.html',
  styleUrls: ['./maestro-materias.component.css']
})
export class MaestroMateriasComponent implements OnInit {

  cursos: Curso[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
