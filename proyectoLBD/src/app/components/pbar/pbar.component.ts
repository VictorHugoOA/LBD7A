import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-pbar',
  templateUrl: './pbar.component.html',
  styleUrls: ['./pbar.component.css']
})
export class PbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.auth.signOut();
  }

}
