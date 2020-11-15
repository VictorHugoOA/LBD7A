import { Component, OnInit } from '@angular/core';
import { Activity } from '../actividad-card/actividad-card.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actividades: Activity[] = [
    {
      id: 0,
      estado: 0,
      desc: "Prueba",
      tipo: 0,
      entrega: new Date(),
      entregada: new Date()
    },
    {
      id: 1,
      estado: 0,
      desc: "Prueba 2",
      tipo: 1,
      entrega: new Date(),
      entregada: null
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
