import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Curso, CursosService } from 'src/app/services/cursos/cursos.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService, private curso: CursosService, private profesor: ProfesorService) {
    if(this.auth.userData == null)
    {
      this.router.navigate(['/login']);
    }
   }

  cursos: any[] = [];

  info: any;

  ngOnInit(): void {
    
    this.curso.getCursosAlumno(this.auth.userData.id).subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.cursos.push(data[i]);
      }
    });

    this.profesor.getAlumnoGrupoProfesor(this.auth.userData.id).subscribe((data: any) => this.info = data[0]);

  }


}
