import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  alumno: Observable<any>;

  constructor(private auth: AuthService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  logOut(){
    this.auth.signOut();
    this.router.navigate(['/login'])
  }

}
