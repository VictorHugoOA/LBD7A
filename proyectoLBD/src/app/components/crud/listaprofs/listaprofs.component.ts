import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-listaprofs',
  templateUrl: './listaprofs.component.html',
  styleUrls: ['./listaprofs.component.css']
})
export class ListaprofsComponent implements OnInit {
  profesores: any[]=[];
  constructor(private prof: CrudService) { }

  ngOnInit(): void {
    this.prof.AllProfesores().subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.profesores.push(data[i]);
      }
    });
  }

}
