import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-archivos-tutoria',
  templateUrl: './archivos-tutoria.component.html',
  styleUrls: ['./archivos-tutoria.component.css']
})
export class ArchivosTutoriaComponent implements OnInit {

  idTuto: string;
  tutoria: Observable<any>;
  archivos: any[] = [];
  constructor(private aRouter: ActivatedRoute, private al: AlumnosService, private profesor: ProfesorService) {
    this.idTuto = this.aRouter.snapshot.params.id;
    this.tutoria = this.al.getTutoria(this.idTuto);
    this.profesor.getArchivosTutoria(this.idTuto).subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.archivos.push(data[i]);
      }
    })
  }

  ngOnInit(): void {
  }

}
