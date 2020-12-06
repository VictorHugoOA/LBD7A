import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modlib',
  templateUrl: './modlib.component.html',
  styleUrls: ['./modlib.component.css']
})
export class ModlibComponent implements OnInit {
  modLibro: FormGroup;
  materias: any[] = [];
  libro:Observable<any>


  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router, private toast: ToastrService) {
    this.crud.AllMaterias().subscribe((data: any[]) => {
      for (var i = 0; i < data.length; ++i) {
        this.materias.push(data[i]);
      }
    });
  }

  buscar(id:string){
    this.libro= this.crud.getLibro(id);
    this.libro.subscribe((data: any) =>{
      this.modLibro.setValue({id: data.id, titulo: data['título'], year: data['año'], editorial: data.editorial, materia: data.id_materia, archivo: data.archivo});
    })
  }
  
  ngOnInit(): void {
    this.modLibro = this.fb.group({
      id: ['', [Validators.required, Validators.pattern("l-+[0-9]*$"), Validators.maxLength(10)]],
      titulo: ['', Validators.required],
      year: ['', Validators.required],
      editorial: ['', Validators.required],
      materia: ['', Validators.required],
      archivo: ['']
    })
  }


  onSubmit()
  {
    if(this.modLibro.valid)
    {
      this.crud.setLibro(this.modLibro.get('id').value,
      this.modLibro.get('titulo').value,
      this.modLibro.get('year').value,
      this.modLibro.get('editorial').value,
      this.modLibro.get('materia').value,
      this.modLibro.get('archivo').value).subscribe((data: any) =>{
        this.toast.success("Se ha modificado el libro en la base de datos", "Modificar Libro")
        this.router.navigateByUrl('/admin');
      });
      //this.router.navigateByUrl('/login');
      //poner navigate
    }
  }

  borrar()
  {
    this.crud.borrarLibro(this.modLibro.get('id').value).subscribe((data: any) =>
    {
      this.toast.success("Se ha modificado el libro en la base de datos", "Borrar Libro")
      this.router.navigateByUrl('/admin');
    });
  }



}
