import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  constructor() { }

  cursos: Curso[] = [];

  ngOnInit(): void {
  }


}
