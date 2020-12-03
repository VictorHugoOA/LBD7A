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


  libros: any[] = [];
  datos: Observable<any>;

  constructor(private al: AlumnosService, private aRouter: ActivatedRoute, private auth: AuthService, private profesor: ProfesorService) {
  }

  ngOnInit(): void {
    if(this.auth.userData.tipo == "Estudiante")
    {
      this.al.getLibrosMaterias(this.auth.userData.id).subscribe((data: any[]) => {
        for (var i = 0; i < data.length; ++i) {
          this.libros.push(data[i]);
        }
      });
      this.datos = this.al.getAlumno(this.auth.userData.id);
    }
    else if(this.auth.userData.tipo == "Profesor")
    {
      this.profesor.getLibrosProfesor(this.auth.userData.id).subscribe((data: any[]) =>{
        for(var i = 0; i < data.length; ++i)
        {
          this.libros.push(data[i]);
        }
      });
      this.datos = this.profesor.getgrupoProfesor(this.auth.userData.id);
    }
  }

}
