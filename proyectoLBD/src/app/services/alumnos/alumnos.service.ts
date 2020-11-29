import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAlumno(id: string) {
    return this.http.get(`http://localhost:3000/Alumno/${id}`).pipe(map(val => {return val[0]}));
  }

  getAvanceAlumno(id: string)
  {
    return this.http.get(`http://localhost:3000/Avances/${id}`);
  }

  getPendientes(id: string){
    return this.http.get(`http://localhost:3000/AlumnoActividadesPendientes/${id}`);
  }

  getActividadAlumno(idAlumno: string, idActividad: string)
  {
    return this.http.get(`http://localhost:3000/`);
  }

}