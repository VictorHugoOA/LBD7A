import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/actividad/actividades.service';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-actividad-card',
  templateUrl: './actividad-card.component.html',
  styleUrls: ['./actividad-card.component.css']
})
export class ActividadCardComponent implements OnInit {

  @Input() actividad: any;
  @Input() usuario: any;

  grupo:any;

  constructor(private al: AlumnosService, private prof: ProfesorService) {
    
  }

  ngOnInit(): void {
  
  }

}