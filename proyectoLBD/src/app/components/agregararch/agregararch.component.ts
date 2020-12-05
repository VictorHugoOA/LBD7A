import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

const uri = "http://localhost:3000/upload";

@Component({
  selector: 'app-agregararch',
  templateUrl: './agregararch.component.html',
  styleUrls: ['./agregararch.component.css']
})
export class AgregararchComponent implements OnInit {
  uploader: FileUploader = new FileUploader({ url: uri });

  materia: string;
  grupo: string;

  titulo: FormControl = new FormControl("Titulo", Validators.required);

  constructor(private aRouter: ActivatedRoute, private router: Router, private profesor: ProfesorService, private auth: AuthService) {
    this.materia = this.aRouter.snapshot.params.idMat;
    this.grupo = this.aRouter.snapshot.params.idGrupo;
  }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let res = JSON.parse(response);
      this.profesor.almacenarRecurso(this.auth.userData.id, this.materia, res.uploadname, this.titulo.value).subscribe((data: any) =>{
        this.router.navigate([`/curso/${this.grupo}/${this.materia}`]);
      });
    }
  }

  guardar() {
    this.uploader.queue[this.uploader.queue.length - 1].upload();
  }

  deleteFile() {
    while(this.uploader.queue.length > 0)
    {
      this.uploader.queue.pop();
    }
  }
}
