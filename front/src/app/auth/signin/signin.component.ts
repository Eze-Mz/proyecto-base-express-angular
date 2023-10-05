import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';
import { RegisterUser } from 'src/app/models/register-user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  isRegistered = false;
  isRegisterFail = false;
  isSubmitted = false;
  inSubmission = false;
  registerUser!: RegisterUser;
  errorMsj!: string;

  tipoUsuario = "encuestador";

  signinForm= this.formBuilder.group ({
    name:['', Validators.required],
    lastName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
  })
  constructor (private formBuilder:FormBuilder, private router:Router, private register:RegisterService) {}

  ngOnInit(): void {

  }

  get name(){
    return this.signinForm.controls.name;
  }

  get lastName(){
    return this.signinForm.controls.lastName;
  }

  get email(){
    return this.signinForm.controls.email;
  }

  get password(){
    return this.signinForm.controls.password;
  }

  get confirmPassword(){
    return this.signinForm.controls.confirmPassword;
  }

  registrarUsuario(event: Event) {
    event.preventDefault;
    this.inSubmission = true;
    if (this.signinForm.valid) {
      this.registerUser = new RegisterUser(this.name.value, this.lastName.value, this.email.value, this.password.value);
    }
    this.register.register(this.registerUser).subscribe({
      next: (data: any) => {
        this.isRegistered = true;
        this.isRegisterFail = false;
        this.register.setToken(data);
        this.router.navigateByUrl('/home');
        this.signinForm.reset();
        this.inSubmission = false;
      },
      error: (error) => {
        this.isRegistered = false;
        this.isRegisterFail = true;
        this.isSubmitted = true;
        this.errorMsj = error.error.message;
        console.log(this.errorMsj);

        this.inSubmission = false;
      },
    });
  }

}



