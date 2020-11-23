import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Activity } from '../actividad-card/actividad-card.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

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

  alumnos: any[] = [{
    id: 0,
    name: "Pepito",
    apellidoPat: "Patas",
    apellidoMat: "Anchas"
  },
  {
    id: 1,
    name: "Juan",
    apellidoPat: "Barrera",
    apellidoMat: "Ignite"
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
