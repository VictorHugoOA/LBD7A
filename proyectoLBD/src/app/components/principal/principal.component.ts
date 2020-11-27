import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/actividad/actividades.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actividades: Activity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
