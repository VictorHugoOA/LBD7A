import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  getAlumnoGrupoProfesor(idAlumno: string)
  {
    return this.http.get(`http://localhost:3000/AlumnoProfesor/${idAlumno}`);
  }
  getProfesor(id: string)
  {
    return this.http.get(`http://localhost:3000/Profesor/${id}`).pipe(map(val => {return val[0]}));
  }
  getgrupoProfesor(id:string){
    return this.http.get(`http://localhost:3000/GrupoProfesor/${id}`).pipe(map(val => {return val[0]}));
  }
  getProfesorGrupo(id:string){
    return this.http.get(`http://localhost:3000/ProfesorGrupo/${id}`).pipe(map(val => {return val[0]}));
  }
  getActividadesAbiertas(id: string)
  {
    return this.http.get(`http://localhost:3000/ProfesorActividadesAbiertas/${id}`);
  }
  
  getAlumnos(id:string){
    return this.http.get(`http://localhost:3000/GrupoAlumProfesor/${id}`);
  }

  getLibrosProfesor(id: string){
    return this.http.get(`http://localhost:3000/LibrosProfesor/${id}`);
  }
}
