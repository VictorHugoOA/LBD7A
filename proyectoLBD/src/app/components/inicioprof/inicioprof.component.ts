import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-inicioprof',
  templateUrl: './inicioprof.component.html',
  styleUrls: ['./inicioprof.component.css']
})
export class InicioprofComponent implements OnInit {
  actividades: any[] = [];

  alumno: any;

  constructor(public auth: AuthService, public prof: ProfesorService) { 
    this.prof.getActividadesAbiertas(this.auth.userData.id).subscribe((data:any[]) => {
      console.log(data);
      for(var i = 0; i < data.length; i++){
        this.actividades.push(data[i]);
      }
    });
  }

  ngOnInit(): void {
  }

}
