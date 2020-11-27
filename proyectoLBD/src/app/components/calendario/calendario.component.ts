import { Component, Input, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Activity } from 'src/app/services/actividad/actividades.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  @Input() actividades: Activity[];
  datos: any[] = [];
  eventSettings: EventSettingsModel;
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.actividades);
    for(var x = 0; x < this.actividades.length; x++)
    {
      this.datos.push({Id: this.actividades[x].id, Subject:this.actividades[x].desc, StartTime: new Date(), EndTime: this.actividades[x].entrega})
    }
    console.log(this.datos);
    this.eventSettings = {
      dataSource: this.datos
    };
  }

}
