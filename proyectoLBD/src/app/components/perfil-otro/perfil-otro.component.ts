import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-perfil-otro',
  templateUrl: './perfil-otro.component.html',
  styleUrls: ['./perfil-otro.component.css']
})
export class PerfilOtroComponent implements OnInit {
  user: any;
  userObs: Observable<any>;
  grupoObs: Observable<any>;
  tipo: string;
  id: string;

  c: Observable<any>;
  cursos: any[] = [];
  avance: number[] = [];
  usuario: any;

  holis: boolean = false;


  constructor(private auth: AuthService, private router: Router, private aRouter: ActivatedRoute, private prof: ProfesorService, private al: AlumnosService, private cur: CursosService, private cd: ChangeDetectorRef) {
  }



  ngOnInit(): void {

    console.log(this.holis);
    this.holis = true
    this.usuario = this.auth.userData;
    this.aRouter.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.tipo = params.get('tipo');
      if (this.tipo == "Estudiante") {
        this.userObs = this.al.getAlumno(this.id);
        this.cur.getCursosAlumno(this.id).subscribe((data: any[]) => {
          for (var i = 0; i < data.length; ++i) {
            this.cursos.push(data[i]);
            this.avance.push(0);
          }
          this.al.getAvanceAlumno(this.id).subscribe((av: any) => {
            console.log(av);
          })
          this.cd.detectChanges();
        })

      }
      if (this.tipo == "Profesor") {
        this.userObs = this.prof.getProfesor(this.id);
        this.grupoObs = this.prof.getgrupoProfesor(this.id);


        this.cur.getCursosProfesor(this.id).subscribe((data: any[]) => {
          for (var i = 0; i < data.length; ++i) {
            this.cursos.push(data[i]);
          }

        });

      }
    });
  }

  

  ngDestroy()
  {
  }
}
