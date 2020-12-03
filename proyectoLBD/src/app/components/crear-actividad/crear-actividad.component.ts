import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private activity: ActividadesService) {

  }

  actividadForm: FormGroup;
  materia: string;

  id: number;
  uploader:FileUploader = new FileUploader({url: uri});

  editarForm: FormGroup;

  archivos: any[] = [];

  attachmentList: any = [];

  bandera: boolean = false;

  ngOnInit(): void {

    this.materia = this.router.snapshot.params.id;

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false};
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) =>{
      let res = JSON.parse(response)
      this.attachmentList.push(res);
      this.bandera = true;
    }

    this.actividadForm = this.fb.group({
      titulo: ['', Validators.required],
      fechaLim: [new Date(), [Validators.required]],
      descripción: ['', [Validators.required]],
      horaLim: ['', Validators.required],
      retraso: ['', Validators.required] 
    });
  }

  onSubmit()
  {
    if(this.actividadForm.valid)
    {
      console.log(this.actividadForm);
    }
  }

  deleteFile(item, index: number)
  {
    if(item.progress >= 100)
    {
      let nameUp = this.attachmentList[index].uploadname;
      //this.acts.borrarArchivoActividad(nameUp);
      this.attachmentList.splice(index, 1);
    }
    item.remove();

    if(this.attachmentList == 0)
      this.bandera = false;
  }

}
