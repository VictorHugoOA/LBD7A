import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-card',
  templateUrl: './actividad-card.component.html',
  styleUrls: ['./actividad-card.component.css']
})
export class ActividadCardComponent implements OnInit {

  @Input() actividad: Activity
  constructor() { }

  ngOnInit(): void {
  }

}

export class Activity{
  id:number;
  estado: number;
  desc: string;
  tipo: number;
  entrega: Date;
  entregada: Date;
}
