import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
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

  tipoUsuario = "encuestador";

  loginForm= this.formBuilder.group ({
    email:['admin@mail.com', [Validators.required, Validators.email]],
    password:['admin1234', Validators.required],
  })
  constructor (private formBuilder:FormBuilder, private router:Router, private auth: AuthService) {}

  ngOnInit(): void {
    if (this.auth.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
    }

    this.loginForm.valueChanges.subscribe(() => {
      this.isSubmitted = false;
      this.isLoginFail = false;
    });
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
    this.auth.login(this.loginUser).subscribe({
      next: (data: any) => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.auth.setToken(data);
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

  toggleUser() {
    if(this.tipoUsuario == "encuestador"){
      this.tipoUsuario = "administrador";
      this.email.setValue("encuestador@mail.com");
      this.password.setValue("encuestador1234");
    } else {
      this.tipoUsuario = "encuestador";
      this.email.setValue("admin@mail.com");
      this.password.setValue("admin1234");
    }
  }
}


