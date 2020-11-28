import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  

  getAlumno(id: string) {
    return this.http.get(`http://localhost:3000/Alumno/${id}`);
  }

  getAvanceAlumno(id: string)
  {
    return this.http.get(`http://localhost:3000/Avances/${id}`);
  }
}