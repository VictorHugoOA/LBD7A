import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  usersStudent: any[] = [
    {
      id: "240045",
      nombre: "Victor Hugo",
      apellidoPat: "Olivetti",
      apellidoMat: "Alvarez",
      password: "holaadios",
      tipo: "Estudiante"
    }];

  public userData: any;

  constructor( private router: Router, private toastr: ToastrService) {
    this.userData = JSON.parse(sessionStorage.getItem("user"));
  }

  login(user: string, password: string){
    user = this.checkStudent(user);

    let userGet: any;
    if(userGet = this.usersStudent.find((val, index) =>{ return (val.id == user && val.password == password)}))
    {
      this.userData = {id: userGet.id, nombre: userGet.nombre, apellidoPat: userGet.apellidoPat, apellidoMat: userGet.apellidoMat, tipo: userGet.tipo};
      sessionStorage.setItem("user", JSON.stringify(this.userData));
      if(this.userData.tipo == "Estudiante")
        this.router.navigate(["/home"]);
      else
        this.router.navigate(['/homeTeacher']);
    }else{
      this.toastr.warning("Hubo un error en la contraseña y el usuario, por favro cheque que el usuario y la contraseña sean correctos", "Usuario y contraseña inválidos");
    }
  }

  checkStudent(user: string): string
  {
    let result = user;
    if(/\d{5}/.test(user) && result.length == 8){
      result = user.substring(2);
    }
    return result;
  }

  signOut(){
    this.userData = null;
    sessionStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }
}
