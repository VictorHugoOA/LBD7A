import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-listagrupos',
  templateUrl: './listagrupos.component.html',
  styleUrls: ['./listagrupos.component.css']
})
export class ListagruposComponent implements OnInit {
  grupos:any[]=[];
  constructor(private prof: CrudService) { }

  ngOnInit(): void {
    this.prof.getGrupos().subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.grupos.push(data[i]);
      }
    });
  }

}
