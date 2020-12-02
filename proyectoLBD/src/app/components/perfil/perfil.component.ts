import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso, CursosService } from 'src/app/services/cursos/cursos.service';
import { map } from 'rxjs/operators';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  user: any;
  userObs: Observable<any>;
  grupoObs: Observable<any>;

  c: Observable<any>;
  cursos: any[] = [];
  avance: number[] = [];
  usuario: any;

  constructor(private auth: AuthService,private prof: ProfesorService , private al: AlumnosService, private cur: CursosService, private cd: ChangeDetectorRef) {
    this.usuario=this.auth.userData;
   }

  ngOnInit(): void {
    if(this.auth.userData.tipo == "Estudiante")
    {

      this.userObs = this.al.getAlumno(this.auth.userData.id);

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
    if(this.auth.userData.tipo == "Profesor")
    {

      this.userObs = this.prof.getProfesor(this.auth.userData.id);
      this.grupoObs = this.prof.getgrupoProfesor(this.auth.userData.id);
      

        this.cur.getCursosProfesor(this.auth.userData.id).subscribe((data:any[]) =>{
          for(var i = 0; i < data.length; ++i)
          {
            this.cursos.push(data[i]);
          }
         
        });

    }

  }

}
