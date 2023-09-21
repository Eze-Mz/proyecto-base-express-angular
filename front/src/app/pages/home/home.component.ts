import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged = false;
  constructor(private login: LoginService, private router: Router) { 
    this.isLogged = this.login.isLogged();
  }
  ngOnInit(): void {
    if(this.isLogged) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
