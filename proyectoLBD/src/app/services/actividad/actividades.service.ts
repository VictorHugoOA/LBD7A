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

  realizarEntrega(idAl: string, idAct: string)
  {
    return this.http.get(`http://localhost:3000/entregar/${idAl}/${idAct}`);
  }

  crearActividad(mat: string)
  {
    return this.http.get(`http://localhost:3000/crearactividad/${mat}`).pipe(map((data: any[]) => {return data[0][0];}));
  }

  actualizarActividad(idAct: string, titulo: string, fecha: string, descripcion: string, hora: string, retraso: number, idProf: string)
  {
    return this.http.post('http://localhost:3000/ActualizarActividad', {id: idAct, titulo: titulo, fecha: fecha, desc: descripcion, hora: hora, retraso: retraso, idprof: idProf});
  }

  obtenerArchivosActividadAlumno(idAlumno: string, idActividad: string)
  {
    return this.http.get(`http://localhost:3000/obtener/${idAlumno}/${idActividad}`).pipe(map((data: any[]) => {
      var newD: any[] = [];
      for (var i = 0; i < data.length; ++i) {
        newD.push(data[i]);
      }
      return newD;
    }));
  }

  almacenarArchivoMaterial(idAct: string, archivo: string){
    return this.http.get(`http://localhost:3000/guardarmaterial/${idAct}/${archivo}`);
  }

  getActividad(idActividad: String)
  {
    return this.http.get(`http://localhost:3000/Actividad/${idActividad}`).pipe(map((data:any[]) => {return data[0];}));
  }

  borrarArchivoActividad(nameUp: string)
  {
    return this.http.get(`http://localhost:3000/delete/${nameUp}`);
  }

  borrarArchivoMaterial(nameUp: string)
  {
    return this.http.get(`http://localhost:3000/borrarMaterial/${nameUp}`);
  }

  añadirArchivoActividad(idAlumno: string, idActividad: string, archivo:string)
  {
    return this.http.get(`http://localhost:3000/guardartarea/${idAlumno}/${idActividad}/${archivo}`);
  }


  getactividadesAlumno(idalum:string, idmat: string){
    return this.http.get(`http://localhost:3000/AlumnoActividades/${idalum}/${idmat}`);
    
  }

}


export class Activity {
  id: number;
  estado: number;
  desc: string;
  entrega: Date;
}
