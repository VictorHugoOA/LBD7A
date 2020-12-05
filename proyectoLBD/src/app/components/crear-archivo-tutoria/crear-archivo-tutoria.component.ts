import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

const uri = "http://localhost:3000/upload";

@Component({
  selector: 'app-crear-archivo-tutoria',
  templateUrl: './crear-archivo-tutoria.component.html',
  styleUrls: ['./crear-archivo-tutoria.component.css']
})
export class CrearArchivoTutoriaComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: uri });

  tutoria: string;
  grupo: string;

  attachmentList: any[] = [];

  constructor(private aRouter: ActivatedRoute, private router: Router, private profesor: ProfesorService, private auth: AuthService) {
    this.tutoria = this.aRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let res = JSON.parse(response);
      this.profesor.almacenarTutoriaArchivo(this.tutoria, res.uploadname).subscribe();
      this.attachmentList.push(res);
    }
  }

  regresar()
  {
    this.router.navigate(['/tutoria']);
  }

  deleteFile(item, index: number) {
    if (item.progress >= 100) {
      let nameUp = this.attachmentList[index].uploadname;
      this.profesor.borrarTutoriaArchivo(nameUp).subscribe();
      this.attachmentList.splice(index, 1)
    }
    item.remove();
  }
}
