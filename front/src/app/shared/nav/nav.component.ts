import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userIsLogged=false;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.userIsLogged = this.login.isLogged();
  }

  cerrarSesion(){
    console.log("LOGOUT");
    
    this.login.logout();
  }

}