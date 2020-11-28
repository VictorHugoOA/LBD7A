import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso, CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  user: any;
  userObs: Observable<any>;

  c: Observable<any>;
  cursos: any[];
  avance: number[] = [];

  constructor(private auth: AuthService, private al: AlumnosService, private cur: CursosService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(this.auth.userData.tipo == "Estudiante")
    {

      this.user = this.al.getAlumno(this.auth.userData.id)

        this.cur.getCursosAlumno(this.auth.userData.id).subscribe((data) =>{
          console.log(data);
          this.cd.detectChanges();
        })

    }
  }

}
