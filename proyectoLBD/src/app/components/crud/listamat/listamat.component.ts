import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-listamat',
  templateUrl: './listamat.component.html',
  styleUrls: ['./listamat.component.css']
})
export class ListamatComponent implements OnInit {
  materias: any[]=[];
  constructor(private cursos: CursosService) { }

  ngOnInit(): void {
    this.cursos.AllMaterias().subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.materias.push(data[i]);
      }
    });
  }

}
