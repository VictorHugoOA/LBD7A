import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {}

  getProfesores(){
    return this.http.get('http://localhost:3000/todosProfesores');
  }

  insertarGrupo(id: string, grado: number, clase: string, profesor: string, cicloIn: number, cicloFin: number)
  {
    return this.http.post('http://localhost:3000/insertarGrupo', {id: id, grado: grado, clase: clase, profesor: profesor, ciclo_inicio: cicloIn, cicloFin: cicloFin});
  }


  insertarProfesor(id: string, nombre: string, paterno: string, materno: string, telefono: string, correo: string, sexo: string, contra: string)
  {
    return this.http.post('http://localhost:3000/insertarProfe', {id: id, nombre: nombre, paterno: paterno, materno: materno, telefono: telefono, correo: correo, sexo: sexo, password: contra});
  }

  getGrupos()
  {
    return this.http.get('http://localhost:3000/todosGrupos');
  }

  insertarAlumno(id: string, nombre: string, paterno: string, materno: string, sexo: string, contra: string, grupo: string)
  {
    return this.http.post('http://localhost:3000/insertarAlumno', {id: id, nombre: nombre, paterno: paterno, materno: materno, sexo: sexo, password: contra, grupo: grupo});
  }
  getProfesor(id:string){
    return this.http.get(`http://localhost:3000/Profesor/${id}`).pipe(map(val => {return val[0]}));
  }
  getMateria(id:string){
    return this.http.get(`http://localhost:3000/Materia/${id}`).pipe(map(val => {return val[0]}));
  }
  getLibro(id:string){
    return this.http.get(`http://localhost:3000/Libro/${id}`).pipe(map(val => {return val[0]}));
  }
  getAlumno(id:string){
    return this.http.get(`http://localhost:3000/Alumno2/${id}`).pipe(map(val => {return val[0]}));
  }
  getGrupo(id:string){
    return this.http.get(`http://localhost:3000/Grupo/${id}`).pipe(map(val => {return val[0]}));
  }
  AllProfesores()
  {
    return this.http.get(`http://localhost:3000/Profesores`);
  }
  AllGrupos(){
    return this.http.get(`http://localhost:3000/Grupos`);
  }
  AllMaterias(){
    return this.http.get(`http://localhost:3000/Materias`);
  }
  AllLibros(){
    return this.http.get(`http://localhost:3000/Libros`);
  }
  AllAlumnos(){
    return this.http.get('http://localhost:3000/Alumnos');
  }
  

}
