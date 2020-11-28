import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.css']
})
export class CursoCardComponent implements OnInit {

  @Input() curso: any;
  @Input() grupo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
