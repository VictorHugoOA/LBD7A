import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';

const uri = "http://localhost:3000/upload";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  uploader: FileUploader = new FileUploader({url: uri});

  attachmentList: any[] = [];
  archivos: any[] = []

  bandera: boolean = false;

  a: string;
  act: string;

  constructor(private acts: ActividadesService, private router: Router, private aRouter: ActivatedRoute) {
    this.act = this.aRouter.snapshot.params.idm;
    this.a = this.aRouter.snapshot.params.ida;
    this.acts.obtenerArchivosActividadAlumno(this.a, this.act).subscribe((data: any[]) =>{
      for(var i = 0; i < data.length; ++i)
      {
        this.archivos.push(data[i]);
      }
    });
  }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false};
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) =>{
      let res = JSON.parse(response)
      this.attachmentList.push(res);
      this.acts.añadirArchivoActividad(this.a, this.act, res.uploadname).subscribe();
      this.bandera = true;
    }
  }

  regresar(){

    if (this.bandera) {
      this.acts.realizarEntrega(this.a, this.act).subscribe();
    }

    this.router.navigate([`/actividad/${this.a}/${this.act}`]);
  }

  eliminar(archivo: string, index: number)
  {
    this.acts.borrarArchivoActividad(archivo).subscribe();
    this.archivos.splice(index, 1);
    this.bandera = true;
  }

  deleteFile(item, index: number)
  {
    if(item.progress >= 100)
    {
      let nameUp = this.attachmentList[index].uploadname;
      this.acts.borrarArchivoActividad(nameUp).subscribe();
      this.attachmentList.splice(index, 1)
    }
    item.remove();

    if(this.attachmentList.length == 0)
      this.bandera = false;
  }

}
