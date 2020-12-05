import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/services/actividad/actividades.service';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-profe-tutoria',
  templateUrl: './profe-tutoria.component.html',
  styleUrls: ['./profe-tutoria.component.css']
})
export class ProfeTutoriaComponent implements OnInit {

  idTuto: string;
  actividades: Activity[] = [];
  tutoria: any;
  profe: Observable<any>;

  constructor(private aRouter: ActivatedRoute, public auth: AuthService, private al: AlumnosService, private profesor: ProfesorService) {
    this.idTuto = this.aRouter.snapshot.params.id;
      this.al.getTutoria(this.idTuto).subscribe((data: any) =>{
        this.tutoria = data;
        if(this.tutoria.id_profesor)
          this.profe = this.profesor.getProfesor(this.tutoria.id_profesor);
      })
    
  }

  routerActivity() {
  }

  ngOnInit(): void {
  }

}
