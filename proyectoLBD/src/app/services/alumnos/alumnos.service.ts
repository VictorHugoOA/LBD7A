import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  

  getAlumno(id: string) {
    let result = {};
    this.http.get(`localhost:3000/Alumno/${id}`).pipe((data: any) => {console.log(data); return data;}).subscribe((data:any) => result = data);
    return result;
  }

  getAlumnoActividadesCurso(idAlumno: string, idCurso: string) {
    

  }
  getAlumnoActividadesCursoEntregadas(idAlumno: string, idCurso: string) {
  }
}