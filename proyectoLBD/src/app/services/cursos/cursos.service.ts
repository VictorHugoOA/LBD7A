import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  getCursosAlumno(idAlumno: string)
  {

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
