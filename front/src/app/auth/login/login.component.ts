import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { LoginUser } from 'src/app/models/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLogged = false;
  isLoginFail = false;
  isSubmitted = false;
  inSubmission = false;
  loginUser!: LoginUser;
  errorMsj!: string;

  loginForm= this.formBuilder.group ({
    email:['john@mail.com', [Validators.required, Validators.email]],
    password:['1234', Validators.required],
  })
  constructor (private formBuilder:FormBuilder, private router:Router, private login:LoginService) {}

  ngOnInit(): void {
    if (this.login.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
    }
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  iniciarSesion(event: Event) {
    event.preventDefault;
    this.inSubmission = true;
    if (this.loginForm.valid) {
      this.loginUser = new LoginUser(this.email.value, this.password.value);
    }
    this.login.login(this.loginUser).subscribe({
      next: (data: any) => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.login.setToken(data);
        this.router.navigateByUrl('/dashboard');
        this.loginForm.reset();
        this.inSubmission = false;
      },
      error: (error) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.isSubmitted = true;
        this.errorMsj = error.error.message;
        console.log(this.errorMsj);
        
        this.inSubmission = false;
      },
    });
  }
}


