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

  almacenarRecurso(idProf: string, idMat: string, archivo: string, titulo: string)
  {
    return this.http.post('http://localhost:3000/almacenarRecurso', {idProf: idProf, idMat: idMat, archivo: archivo, titulo: titulo});
  }

  getProfeTutorias(idProf: string)
  {
    return this.http.get(`http://localhost:3000/tutoriaProfe/${idProf}`);
  }

  crearProfeTutoria(idProf: string, titulo: string, desc: string)
  {
    return this.http.post('http://localhost:3000/crearTutoria', {idProf: idProf, titulo: titulo, desc: desc});
  }


  almacenarTutoriaArchivo(idTuto: string, archivo: string)
  {
    return this.http.post('http://localhost:3000/guardarArchivoTutoria', {id: idTuto, archivo: archivo});
  }

  borrarTutoriaArchivo(archivo: string)
  {
    return this.http.post('http://localhost:3000/borrarArchivoTutoria', {archivo: archivo});
  }

  getArchivosTutoria(id: string)
  {
    return this.http.get(`http://localhost:3000/archivosTutoria/${id}`);
  }

  getTutoriasRespondidas(id: string)
  {
    return this.http.get(`http://localhost:3000/tutoriasRespondidasProf/${id}`);
  }


}
