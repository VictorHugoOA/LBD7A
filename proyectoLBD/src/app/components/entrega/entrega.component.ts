import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';

const uri = "http://localhost:3000/upload";

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: uri });

  attachmentList: any[] = [];

  bandera: boolean = false;

  a: string;
  act: string;

  constructor(private http: HttpClient, private aRouter: ActivatedRoute, private router: Router, private acti: ActividadesService) {
    this.act = this.aRouter.snapshot.params.idm;
    this.a = this.aRouter.snapshot.params.ida;
  }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let res = JSON.parse(response)
      this.attachmentList.push(res);
      this.acti.añadirArchivoActividad(this.a, this.act, res.uploadname).subscribe();
      this.bandera = true;
    }
  }

  regresar() {

    if (this.bandera) {
      this.acti.realizarEntrega(this.a, this.act).subscribe();
    }

    this.router.navigate([`/actividad/${this.a}/${this.act}`]);
  }

  deleteFile(item, index: number) {
    if (item.progress >= 100) {
      let nameUp = this.attachmentList[index].uploadname;
      this.http.get(`http://localhost:3000/delete/${nameUp}`).subscribe();
      this.attachmentList.splice(index, 1)
    }
    item.remove();

    if (this.attachmentList.length == 0)
      this.bandera = false;
  }

}
