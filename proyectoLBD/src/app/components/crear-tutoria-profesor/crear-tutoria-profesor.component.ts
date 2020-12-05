import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-crear-tutoria-profesor',
  templateUrl: './crear-tutoria-profesor.component.html',
  styleUrls: ['./crear-tutoria-profesor.component.css']
})
export class CrearTutoriaProfesorComponent implements OnInit {

  tutoriaForm: FormGroup;
  constructor(private fb: FormBuilder, private al: AlumnosService, private auth: AuthService, private router: Router) {
    this.tutoriaForm = this.fb.group({
      pregunta: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.tutoriaForm.valid)
    {
      this.al.crearAlumnoTutoria(this.auth.userData.id, this.tutoriaForm.get('pregunta').value).subscribe((data: any[]) =>{
        this.router.navigate(['/tutoria']);
      });
    }
  }

}
