import { Component, OnInit } from '@angular/core';
import { dataBinding } from '@syncfusion/ej2-angular-schedule';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-al-tutorias-solicitar',
  templateUrl: './al-tutorias-solicitar.component.html',
  styleUrls: ['./al-tutorias-solicitar.component.css']
})
export class AlTutoriasSolicitarComponent implements OnInit {

  tutorias: any[] = [];
  respondidas: any[] = [];
  constructor(public auth: AuthService, private al: AlumnosService, private profesor: ProfesorService) { }

  ngOnInit(): void {
    if (this.auth.userData.tipo == 'Estudiante') {
      this.al.getTutorias(this.auth.userData.id).subscribe((data: any[]) => {
        for (var i = 0; i < data.length; ++i) {
          this.tutorias.push(data[i]);
        }
      });
      this.al.getTutoriasRespondidas(this.auth.userData.id).subscribe((data: any[]) =>{
        console.log(data);
        for(var i = 0; i < data.length; ++i)
        {
          this.respondidas.push(data[i]);
        }
      });
    }
    else if (this.auth.userData.tipo == 'Profesor') {
      this.profesor.getProfeTutorias(this.auth.userData.id).subscribe((data: any[]) => {
        for (var i = 0; i < data.length; ++i) {
          this.tutorias.push(data[i]);
        }
      });
      this.profesor.getTutoriasRespondidas(this.auth.userData.id).subscribe((data: any[]) =>{
        for(var i = 0; i < data.length; ++i)
        {
          this.respondidas.push(data[i]);
        }
      })
    }
  }

}
