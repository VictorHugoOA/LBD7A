import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-archivo-card',
  templateUrl: './archivo-card.component.html',
  styleUrls: ['./archivo-card.component.css']
})
export class ArchivoCardComponent implements OnInit {

  
  @Input() archivo: any;
  @Input() usuario: any;

  grupo:any;

  constructor(private act: ActividadesService, private router: Router, public auth: AuthService) {
    
  }

  ngOnInit(): void {
  
  }

  
 /* borrar()
  {
    this.act.borrarActividad(this.actividad.id_actividad).subscribe((data: any)=>{
      console.log(data);
      this.router.navigate(['/cursos']);
    });
  }*/

}
