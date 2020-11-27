import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cursos: Curso[] = [];
  avance: number[] = [];

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
