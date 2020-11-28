import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso, CursosService } from 'src/app/services/cursos/cursos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  user: any;
  userObs: Observable<any>;

  c: Observable<any>;
  cursos: any[] = [];
  avance: number[] = [];

  constructor(private auth: AuthService, private al: AlumnosService, private cur: CursosService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(this.auth.userData.tipo == "Estudiante")
    {

      this.userObs = this.al.getAlumno(this.auth.userData.id).pipe(map(val => {return val[0]}))

        this.cur.getCursosAlumno(this.auth.userData.id).subscribe((data:any[]) =>{
          for(var i = 0; i < data.length; ++i)
          {
            this.cursos.push(data[i]);
            this.avance.push(0);
          }
          this.al.getAvanceAlumno(this.auth.userData.id).subscribe((av:any) => {
            console.log(av);
          })
          this.cd.detectChanges();
        })

    }
  }

}
