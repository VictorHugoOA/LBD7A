import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './listaalumnos.component.html',
  styleUrls: ['./listaalumnos.component.css']
})
export class ListaalumnosComponent implements OnInit {
  alumnos: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
