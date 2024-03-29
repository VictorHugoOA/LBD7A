import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    if(this.auth.userData)
    {
      if(this.auth.userData.tipo == "Administrador")
      {
        this.router.navigate(['/admin']);
      }else{
        this.auth.userData = null;
        sessionStorage.removeItem("user");
      }
    }
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+')]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
  }

  

}
