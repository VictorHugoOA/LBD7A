import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css']
})
export class EditarActividadComponent implements OnInit {


  id: any;
  uploader:FileUploader = new FileUploader({url: uri});

  editarForm: FormGroup;

  archivos: any[] = [];

  attachmentList: any = [];

  bandera: boolean = false;
  actividad:any;
  constructor(private fb: FormBuilder, private aRouter: ActivatedRoute, private acts: ActividadesService) {
    this.id = this.aRouter.snapshot.params.ida;



  }

  ngOnInit(): void {

   this.actividad= this.acts.getActividad(this.id);

    this.editarForm = this.fb.group({
      titulo: [`${this.actividad.titulo}`, Validators.required],
      fechaLim: [`${this.actividad.fecha_limite}`, Validators.required],
      horaLim: [`${this.actividad.hora_limite}`, Validators.required],
      desc: [`${this.actividad['descripción']}`, Validators.required],
      estado: ['', Validators.required],
      retraso: ['', Validators.required]
    })

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
