import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.css']
})
export class ResponderComponent implements OnInit {

  tutoriaForm: FormGroup;
  idTuto: string;
  tutoria: any;

  constructor(private fb: FormBuilder, private al: AlumnosService, private auth: AuthService, private router: Router, private aRouter: ActivatedRoute) {
    this.idTuto = this.aRouter.snapshot.params.id;

    this.al.getTutoria(this.idTuto).subscribe((data: any) =>{
      console.log(data);
      this.tutoria = data;
    })

    this.tutoriaForm = this.fb.group({
      respuesta: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.tutoriaForm.valid)
    {
      this.al.actualizarTutoria(this.idTuto, this.auth.userData.id, this.tutoriaForm.get('respuesta').value).subscribe((data: any[]) =>{
        this.router.navigate([`/archivoTutoria/${this.idTuto}`]);
      });
    }
  }
}
