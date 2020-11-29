import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pbar',
  templateUrl: './pbar.component.html',
  styleUrls: ['./pbar.component.css']
})
export class PbarComponent implements OnInit {

  alumno: Observable<any>;

  public now: Date = new Date()

  constructor(private auth: AuthService, private router: Router, private cd: ChangeDetectorRef) {
    setInterval(() => {this.now = new Date()}, 1)
  }

  ngOnInit(): void {
  }

}
