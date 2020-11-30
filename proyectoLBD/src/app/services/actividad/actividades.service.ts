import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private http: HttpClient) { }

  getActividadesGrupo(idCurso: string, idG: string) {
    return this.http.get(`http://localhost:3000/ActividadesMateriaGrupo/${idG}/${idCurso}`).pipe(map((data: any[]) => {
      var newD: any[] = [];
      for (var i = 0; i < data.length; ++i) {
        newD.push({ id_actividad: data[i].id, titulo: data[i].titulo, fecha_limite: data[i].fecha_limite, hora_limite: data[i].hora_limite, descripción: data[i]['descripción'], estado: data[i].estado, retraso: data[i].retraso, id_materia: data[i].id_materia });
      }
      return newD;
    }));
  }

  crearActividad(actividad: any)
  {

  }

  borrarArchivoActividad(nameUp: string)
  {
    return this.http.get(`http://localhost:3000/delete/${nameUp}`);
  }

}


export class Activity {
  id: number;
  estado: number;
  desc: string;
  entrega: Date;
}
