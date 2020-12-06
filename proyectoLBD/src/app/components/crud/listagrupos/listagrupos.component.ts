import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';

@Component({
  selector: 'app-listagrupos',
  templateUrl: './listagrupos.component.html',
  styleUrls: ['./listagrupos.component.css']
})
export class ListagruposComponent implements OnInit {
  grupos:any[]=[];
  constructor(private prof:ProfesorService) { }

  ngOnInit(): void {
    this.prof.AllGrupos().subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.grupos.push(data[i]);
      }
    });
  }

}
