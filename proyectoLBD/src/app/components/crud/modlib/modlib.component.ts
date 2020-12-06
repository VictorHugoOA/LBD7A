import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  AltaLibro: FormGroup;

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) {
  }

  buscar(id:string){
    this.libro= this.crud.getLibro(id);
    this.libro.subscribe((data: any) =>{
      console.log(data);
    })
  }
  
  ngOnInit(): void {
  }

}
