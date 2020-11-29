import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/actividad/actividades.service';

@Component({
  selector: 'app-actividad-card',
  templateUrl: './actividad-card.component.html',
  styleUrls: ['./actividad-card.component.css']
})
export class ActividadCardComponent implements OnInit {

  @Input() actividad: any;
  constructor() { }

  ngOnInit(): void {
  }

}