import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './listaalumnos.component.html',
  styleUrls: ['./listaalumnos.component.css']
})
export class ListaalumnosComponent implements OnInit {
  alumnos: any[]=[];
  constructor(private alum: CrudService) { }

  ngOnInit(): void {
    this.alum.AllAlumnos().subscribe((data:any[]) => {
      for(var i = 0; i < data.length; ++i)
      {
        this.alumnos.push(data[i]);
      }
    });
  }

}
