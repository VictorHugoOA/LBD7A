import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAlumno(id: string) {
    return this.http.get(`http://localhost:3000/Alumno/${id}`).pipe(map(val => { return val[0] }));
  }

  getAvanceAlumno(id: string) {
    return this.http.get(`http://localhost:3000/Avances/${id}`);
  }

  getPendientes(id: string) {
    return this.http.get(`http://localhost:3000/AlumnoActividadesPendientes/${id}`);
  }

  getActividadAlumno(idAlumno: string, idActividad: string) {
    return this.http.get(`http://localhost:3000/AlumnoActividad/${idAlumno}/${idActividad}`).pipe(map((data: any) => { return data[0] }));
  }

  setCalificacion(idAlumno: string, idActividad: string, calificacion: number, comentario: string)
  {
    return this.http.post('http://localhost:3000/calificar', {idAl: idAlumno, idAct: idActividad, calificacion: calificacion, comentario: comentario});
  }

  getLibrosMaterias(id: string)
  {
    return this.http.get(`http://localhost:3000/LibrosAlumno/${id}`);
  }
  getTutorias(id: string)
  {
    return this.http.get(`http://localhost:3000/tutoriasAlumno/${id}`);
  }

  crearAlumnoTutoria(idAl: string, pregunta: string)
  {
    return this.http.post('http://localhost:3000/crearTutoria', {idAl: idAl, pregunta: pregunta});
  }

  AllAlumnos(){
    return this.http.get('http://localhost:3000/Alumnos');
  }

  getTutoria(id: string)
  {
    return this.http.get(`http://localhost:3000/tutoria/${id}`).pipe(map((data: any[]) => {return data[0];}));
  }

  actualizarTutoria(id: string, idProf: string, respuesta: string)
  {
    return this.http.post('http://localhost:3000/actualizarTutoria', {id: id, idProf: idProf, respuesta: respuesta});
  }

  getTutoriasRespondidas(id: string)
  {
    return this.http.get(`http://localhost:3000/tutoriasRespondidas/${id}`);
  }

}