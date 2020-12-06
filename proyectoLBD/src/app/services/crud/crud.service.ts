import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {}

  getProfesores(){
    return this.http.get('http://localhost:3000/todosProfesores');
  }

  insertarGrupo(id: string, grado: number, clase: string, profesor: string)
  {
    return this.http.post('http://localhost:3000/insertarGrupo', {id: id, grado: grado, clase: clase, profesor: profesor});
  }

}
