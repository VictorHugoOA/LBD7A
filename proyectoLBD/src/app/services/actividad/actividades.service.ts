import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor() { }

  getActividadesCurso(idCurso: string) {

  }

  getActividad(idActividad: string) {

  }

  getActividades(id: string){
    
  }

  crearActividad(actividad: any)
  {

  }
}


export class Activity {
  id: number;
  estado: number;
  desc: string;
  entrega: Date;
}
