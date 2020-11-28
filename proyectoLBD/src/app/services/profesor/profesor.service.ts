import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  getAlumnoGrupoProfesor(idAlumno: string)
  {
    return this.http.get(`http://localhost:3000/AlumnoProfesor/${idAlumno}`);
  }
}
