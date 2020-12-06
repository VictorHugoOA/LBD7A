import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  getCursosAlumno(idAlumno: string)
  {
    return this.http.get(`http://localhost:3000/cursosAlumno/${idAlumno}`);
  }

  getCurso(idCurso: string){
    return this.http.get(`http://localhost:3000/Materia/${idCurso}`).pipe(map((data:any)=> {console.log(data); return data[0];}));
  }


  getCursosProfesor(id: string)
  {
    return this.http.get(`http://localhost:3000/MateriasProfesor/${id}`);
    
  }
  getRecursosProfesor(idmat: string, idprof: string)
  {
    return this.http.get(`http://localhost:3000/obtenerRecursos/${idmat}/${idprof}`);
    
  }
  borrarRecurso(id: string)
  {
    return this.http.get(`http://localhost:3000/borrarRecursos/${id}`);
    
  }

  AllMaterias(){
    return this.http.get(`http://localhost:3000/Materias`);
  }
  AllLibros(){
    return this.http.get(`http://localhost:3000/Libros`);
  }

}

export interface Curso{
  id: number;
  nombre: string;
  grado: number;
  campo: string;
  profesor: string;
}
