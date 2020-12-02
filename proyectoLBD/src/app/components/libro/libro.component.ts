import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  usuario: string;

  libros: any[] = [];
  datos: Observable<any>;

  constructor(private al: AlumnosService, private aRouter: ActivatedRoute, private auth: AuthService, private profesor: ProfesorService) {
    this.usuario = this.aRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    if(this.auth.userData.tipo == "Estudiante")
    {
      this.al.getLibrosMaterias(this.usuario).subscribe((data: any[]) => {
        for (var i = 0; i < data.length; ++i) {
          this.libros.push(data[i]);
        }
      });
      this.datos = this.al.getAlumno(this.usuario);
    }
    else if(this.auth.userData.tipo == "Profesor")
    {
      this.profesor.getLibrosProfesor(this.usuario).subscribe((data: any[]) =>{
        for(var i = 0; i < data.length; ++i)
        {
          this.libros.push(data[i]);
        }
      });
      this.datos = this.profesor.getgrupoProfesor(this.usuario);
    }
  }

}
