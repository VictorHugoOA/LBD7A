import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    
  }

  getAlumnosCurso(id: string)
  {
    
  }

  getCursosProfesor(id: string)
  {
    
  }

}

export interface Curso{
  id: number;
  nombre: string;
  grado: number;
  campo: string;
  profesor: string;
}
