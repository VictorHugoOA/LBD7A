import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  usersStudent: any[] = [
    {
      id: "a000001",
      nombre: "Victor Hugo",
      apellidoPat: "Olivetti",
      apellidoMat: "Alvarez",
      password: "holaadios",
      tipo: "Estudiante"
    },
    {
      id: "235664",
      nombre: "Nicole",
      apellidoPat: "F",
      apellidoMat: "S",
      password: "a",
      tipo: "Estudiante"
    }
  ];

  public userData: any;

  constructor(private router: Router, private toastr: ToastrService, private http: HttpClient) {
    this.userData = JSON.parse(sessionStorage.getItem("user"));
  }


  loginAlumno(user: string, password: string) {
    return this.http.get(`http://localhost:3000/LoginA/${user}/${password}`);
  }

  loginProfesor(user: string, password: string) {
    return this.http.get(`http://localhost:3000/LoginP/${user}/${password}`);
  }


  login(user: string, password: string) {

    if (user[0] == 'a') {
      this.loginAlumno(user, password).subscribe((data: any) => {
        if (data[0].length) {
          this.userData = { id: data[0][0].id, tipo: "Estudiante" };
          sessionStorage.setItem("user", JSON.stringify(this.userData));
          this.router.navigate(['/cursos']);
        } else {
          this.toastr.warning("Revise sus datos e intente de nuevo.", "Contraseña y/o Usuario incorrecto");
        }
      },
        err => this.toastr.error(err, "Error en el sistema"));
    }
    else {

      this.loginProfesor(user, password).subscribe((data: any) => {
        if (data[0].length) {
          this.userData = { id: data[0][0].id, tipo: "Estudiante" };
          sessionStorage.setItem("user", JSON.stringify(this.userData));
          this.router.navigate(['/homeTeacher']);
        } else {
          this.toastr.warning("Revise sus datos e intente de nuevo.", "Contraseña y/o Usuario incorrecto");
        }
      },
        err => this.toastr.error(err, "Error en el sistema"));

    }

  }

  checkStudent(user: string): string {
    let result = user;
    if (/\d{5}/.test(user) && result.length == 8) {
      result = user.substring(2);
    }
    return result;
  }

  signOut() {
    this.userData = null;
    sessionStorage.removeItem("user");
  }
}
