import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-archivo-card',
  templateUrl: './archivo-card.component.html',
  styleUrls: ['./archivo-card.component.css']
})
export class ArchivoCardComponent implements OnInit {

  
  @Input() archivo: any;
  @Input() usuario: any;



  constructor(private curso: CursosService, private router: Router, public auth: AuthService) {
    
  }

  ngOnInit(): void {
  
  }

  
  borrar()
  {
    this.curso.borrarRecurso(this.archivo.id).subscribe((data: any)=>{
      console.log(data);
      this.router.navigate(['/cursos']);
     
    });
  }

}
