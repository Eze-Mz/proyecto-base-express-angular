import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterUser } from 'src/app/models/register-user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isRegistered = false;
  isRegisterFail = false;
  isSubmitted = false;
  inSubmission = false;
  registerUser!: RegisterUser;
  errorMsj!: string;

  tipoUsuario = "encuestador";

  registerForm= this.formBuilder.group ({
    name:['', Validators.required],
    lastName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
  })
  constructor (private formBuilder:FormBuilder, private router:Router, private auth: AuthService) {
    this.name.setValue('Juan');
    this.lastName.setValue('Perez');
    this.email.setValue('juan@mail.com');
    this.password.setValue('juan1234');
    this.confirmPassword.setValue('juan1234');

  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(() => {
      this.isSubmitted = false;
      this.isRegisterFail = false;
      this.isRegistered = false;
    });
    
  }

  get name(){
    return this.registerForm.controls.name;
  }

  get lastName(){
    return this.registerForm.controls.lastName;
  }

  get email(){
    return this.registerForm.controls.email;
  }

  get password(){
    return this.registerForm.controls.password;
  }

  get confirmPassword(){
    return this.registerForm.controls.confirmPassword;
  }

  registrarUsuario(event: Event) {
    event.preventDefault;
    this.inSubmission = true;
    if (this.registerForm.valid) {
      this.registerUser = new RegisterUser(this.name.value, this.lastName.value, this.email.value, this.password.value);
    }
    this.auth.register(this.registerUser).subscribe({
      next: (data: any) => {
        this.isRegisterFail = false;
        this.registerForm.reset();
        this.isRegistered = true;
        this.inSubmission = false;
      },
      error: (error) => {
        this.isRegistered = false;
        this.isRegisterFail = true;
        this.isSubmitted = true;
        
        if(error.error.error.includes('email')){
          this.errorMsj = 'El email ya esta registrado';
        }
        this.inSubmission = false;
      },
    });
  }

}



