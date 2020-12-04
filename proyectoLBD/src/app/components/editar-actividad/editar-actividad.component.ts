import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.css']
})
export class EditarActividadComponent implements OnInit {


  actividadForm: FormGroup;
  materia: string;
  idAct: string;
  actividad: any;
  id: number;
  uploader: FileUploader = new FileUploader({ url: uri });
  editarForm: FormGroup;
  archivos: any[] = [];
  attachmentList: any = [];
  bandera: boolean = false;

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private activity: ActividadesService, private r: Router, private auth: AuthService) {
    this.materia = this.router.snapshot.params.idm;
    this.idAct = this.router.snapshot.params.ida;
    this.activity.getActividad(this.idAct).subscribe((data: any) => {
      this.actividad = data;

      let f = this.actividad.fecha_limite.split("T")[0];

      this.actividadForm = this.fb.group({
        titulo: [`${this.actividad.titulo}`, Validators.required],
        fechaLim: [`${f}`, [Validators.required]],
        descripcion: [`${this.actividad['descripción']}`, [Validators.required]],
        horaLim: [`${this.actividad.hora_limite}`, Validators.required],
        retraso: ['', Validators.required],
        cerrar: ['', Validators.required]
      });
    });


    this.activity.getActividadMaterial(this.idAct).subscribe((data: any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.archivos.push(data[i]);
      }
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let res = JSON.parse(response);
      this.activity.almacenarArchivoMaterial(this.idAct, res.uploadname).subscribe();
      this.attachmentList.push(res);
      this.bandera = true;
    }
  }
  eliminar(archivo: string, index: number)
  {
    this.activity.borrarArchivoMaterial(archivo).subscribe();
    this.archivos.splice(index, 1);
    this.bandera = true;
  }


  ngOnInit(): void {
  }

  onSubmit() {
    let retraso = 0;
    let cerrar = 0;
    if (this.actividadForm.valid) {
      if (this.actividadForm.get('retraso').value == 'si') {
        retraso = 1;
      }
      else {
        retraso = 0;
      }
      if(this.actividadForm.get('cerrar').value == 'si')
      {
        cerrar = 1;
      }
      else{
        cerrar = 0;
      }
      this.activity.editarActividad(this.idAct,
        this.actividadForm.get('titulo').value,
        this.actividadForm.get('fechaLim').value,
        this.actividadForm.get('descripcion').value,
        this.actividadForm.get('horaLim').value, retraso, cerrar).subscribe((data: any) => {
          this.r.navigate(['/cursos']);
        });
    }
  }

  deleteFile(item, index: number) {
    console.log(item.progress);
    if (item.progress >= 100) {
      let nameUp = this.attachmentList[index].uploadname;
      this.activity.borrarArchivoMaterial(nameUp).subscribe();
      this.attachmentList.splice(index, 1);
    }
    item.remove();

    if (this.attachmentList == 0)
      this.bandera = false;
  }

}
