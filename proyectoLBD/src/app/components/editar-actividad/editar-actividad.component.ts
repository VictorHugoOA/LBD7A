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


  id: number;
  uploader:FileUploader = new FileUploader({url: uri});

  editarForm: FormGroup;

  archivos: any[] = [];

  attachmentList: any = [];

  bandera: boolean = false;

  constructor(private fb: FormBuilder, private aRouter: ActivatedRoute, private acts: ActividadesService) {
    this.id = this.aRouter.snapshot.params.ida;



  }

  ngOnInit(): void {

    this.editarForm = this.fb.group({
      titulo: ['', Validators.required],
      fechaLim: ['', Validators.required],
      horaLim: ['15:30', Validators.required],
      desc: ['', Validators.required],
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
