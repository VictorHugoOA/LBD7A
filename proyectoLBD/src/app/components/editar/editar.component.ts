import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';

const uri = "http://localhost:3000/uploads";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  uploader: FileUploader = new FileUploader({url: uri});

  attachmentList: any = [];

  bandera: boolean = false;

  a: string;
  act: string;

  archivos: any[] = [];

  constructor(private acts: ActividadesService, private router: Router) { }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false};
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) =>{
      this.attachmentList.push(JSON.parse(response));
      this.bandera = true;
    }
  }

  regresar(){

    if(this.bandera){
      
    }

    this.router.navigate([`/actividad/${this.a}/${this.act}`]);
  }

  deleteFile(item, index: number)
  {
    if(item.progress >= 100)
    {
      let nameUp = this.attachmentList[index].uploadname;
      this.acts.borrarArchivoActividad(nameUp);
      this.attachmentList.remove(index);
    }
    item.remove();

    if(this.attachmentList == 0)
      this.bandera = false;
  }

}
