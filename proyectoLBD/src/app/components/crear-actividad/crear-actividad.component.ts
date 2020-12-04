import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FileUploader } from 'ng2-file-upload';
import { ActividadesService } from 'src/app/services/actividad/actividades.service';
import { AuthService } from 'src/app/services/auth/auth.service';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {
  grupo: any;

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private activity: ActividadesService, private r: Router, private auth: AuthService) {
    this.grupo = this.router.snapshot.params.idg;
    this.materia = this.router.snapshot.params.id;
    this.idAct = this.router.snapshot.params.ida;
    this.activity.getActividad(this.idAct).subscribe((data: any) => {
      this.actividad = data;

      let f = this.actividad.fecha_limite.split("T")[0];

      this.actividadForm = this.fb.group({
        titulo: [`${this.actividad.titulo}`, Validators.required],
        fechaLim: [`${f}`, [Validators.required]],
        descripcion: [`${this.actividad['descripción']}`, [Validators.required]],
        horaLim: [`${this.actividad.hora_limite}`, Validators.required],
        retraso: ['', Validators.required]
      });
    })
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let res = JSON.parse(response);
      this.activity.almacenarArchivoMaterial(this.idAct, res.uploadname).subscribe();
      this.attachmentList.push(res);
      this.bandera = true;
    }
  }

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

  ngOnInit(): void {
  }

  onSubmit() {
    let retraso = 0;
    if (this.actividadForm.valid) {
      if (this.actividadForm.get('retraso').value == 'si') {
        retraso = 1;
      }
      else {
        retraso = 0;
      }
      this.activity.actualizarActividad(this.idAct, 
        this.actividadForm.get('titulo').value,
        this.actividadForm.get('fechaLim').value,
        this.actividadForm.get('descripcion').value,
        this.actividadForm.get('horaLim').value, retraso, this.auth.userData.id).subscribe((data: any) => {
         
        this.r.navigate([`/curso/${this.grupo}/${this.materia}`]);
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
