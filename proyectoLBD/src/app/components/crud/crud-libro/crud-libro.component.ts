import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';


@Component({
  selector: 'app-crud-libro',
  templateUrl: './crud-libro.component.html',
  styleUrls: ['./crud-libro.component.css']
})
export class CrudLibroComponent implements OnInit {
  AltaLibro: FormGroup


  materias: any[] = []

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) {
    this.crud.AllMaterias().subscribe((data: any[]) => {
      for (var i = 0; i < data.length; ++i) {
        this.materias.push(data[i]);
      }
    })
  }

  ngOnInit(): void {
    this.AltaLibro = this.fb.group({
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
    if(this.AltaLibro.valid)
    {
      this.crud.insertarLibro(this.AltaLibro.get('id').value,
      this.AltaLibro.get('titulo').value,
      this.AltaLibro.get('year').value,
      this.AltaLibro.get('editorial').value,
      this.AltaLibro.get('materia').value,
      this.AltaLibro.get('archivo').value).subscribe();
      this.router.navigateByUrl('/login');
    }
  }

}
