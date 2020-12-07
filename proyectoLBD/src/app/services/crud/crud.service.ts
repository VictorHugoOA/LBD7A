import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {}

  getProfesores(){
    return this.http.get('http://localhost:3000/Profesores2');
  }

  insertarGrupo(id: string, grado: number, clase: string, profesor: string, cicloIn: string, cicloFin: string)
  {
    return this.http.post('http://localhost:3000/insertarGrupo', {id: id, grado: grado, clase: clase, profesor: profesor, cicloIn: cicloIn, cicloFin: cicloFin});
  }


  insertarProfe(id: string, nombre: string, paterno: string, materno: string, telefono: string, correo: string, sexo: string, contra: string)
  {
    return this.http.post('http://localhost:3000/insertarProfesor', {id: id, nombre: nombre, paterno: paterno, materno: materno, telefono: telefono, correo: correo, sexo: sexo, password: contra});
  }

  insertarMateria(id: string, nombre: string, campo: string, nivel: string)
  {
    return this.http.post('http://localhost:3000/insertarMateria', {id: id, nombre: nombre, campo: campo, nivel: nivel});
  }

  insertarLibro(id: string, titulo: string, year: string, editorial: string, materia: string, archivo: string)
  {
    return this.http.post('http://localhost:3000/insertarLibro', {id: id, titulo: titulo, year: year, editorial: editorial, materia: materia, archivo: archivo});
  }

  getGrupos()
  {
    return this.http.get('http://localhost:3000/Grupos2');
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
  //aqui redireccionar todo
  setProfesor(id: string, nombre: string, paterno: string, materno: string, telefono: string, correo: string, sexo: string, contra: string)
  {
    return this.http.post('http://localhost:3000/modificarProfesor', {id: id, nombre: nombre, paterno: paterno, materno: materno, telefono: telefono, correo: correo, sexo: sexo, contra: contra});
  }
  setGrupo(id: string, grado: number, clase: string, profesor: string, cicloIn: number, cicloFin: number){
    return this.http.post('http://localhost:3000/modificarGrupo', {id: id, grado: grado, clase: clase, profesor: profesor, cicloIn: cicloIn, cicloFin: cicloFin});
  }
  setMateria(id: string, nombre: string, campo: string, nivel: string){
    return this.http.post('http://localhost:3000/modificarMateria', {id: id, nombre: nombre, campo: campo, nivel: nivel});
  }
  setLibro(id: string, titulo: string, year: string, editorial: string, materia: string, archivo: string){
    return this.http.post('http://localhost:3000/modificarLibro', {id: id, titulo: titulo, year: year, editorial: editorial, materia: materia, archivo: archivo});
  }
  setAlumno(id: string, nombre: string, paterno: string, materno: string, sexo: string, contra: string, grupo: string){
    return this.http.post('http://localhost:3000/modificarAlumno', {id: id, nombre: nombre, paterno: paterno, materno: materno, sexo: sexo, password: contra, grupo});
  }

  borrarProfesor(id: string)
  {
    return this.http.get(`http://localhost:3000/borrarProfesor/${id}`);
  }
  borrarAlumno(id: string)
  {
    return this.http.get(`http://localhost:3000/borrarAlumno/${id}`);
  }
  borrarLibro(id: string)
  {
    return this.http.get(`http://localhost:3000/borrarLibro/${id}`);
  }
  borrarGrupo(id: string)
  {
    return this.http.get(`http://localhost:3000/borrarGrupo/${id}`);
  }
  borrarMateria(id: string)
  {
    return this.http.get(`http://localhost:3000/borrarMateria/${id}`);
  }

}
