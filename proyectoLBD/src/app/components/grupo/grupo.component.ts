import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  alumnos: any[]=[];
  constructor(private router: Router, private auth: AuthService, private profesor: ProfesorService) { }

  ngOnInit(): void {

    this.profesor.getAlumnos(this.auth.userData.id).subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.alumnos.push(data[i]);
      }
    });
    
  }

}
