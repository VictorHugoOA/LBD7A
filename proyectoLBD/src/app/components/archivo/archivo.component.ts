import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit {
  curso: Observable<any>;
  grupo: Observable<any>;
  archivos: any[] = [];  
  prof: string;
  materia: string;
  constructor(public auth: AuthService, private router: Router, private aRouter: ActivatedRoute, private c: CursosService, private act: ActividadesService, private profesor:ProfesorService
    ) {
    this.prof = this.aRouter.snapshot.params.idp;
    this.materia = this.aRouter.snapshot.params.idm;

  }


 
  ngOnInit(): void {
    this.grupo = this.profesor.getgrupoProfesor(this.prof);
    this.curso = this.c.getCurso(this.materia);
  
  }

}
