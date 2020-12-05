import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    if(this.auth.userData.tipo != "Administrador")
    {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
