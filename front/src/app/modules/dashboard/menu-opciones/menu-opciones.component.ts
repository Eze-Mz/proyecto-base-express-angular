import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { USER_ROLES } from 'src/app/models/roles';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent implements OnInit{
  userIsLogged=false;
  userIsAdmin=false;
  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.userIsLogged = this.login.isLogged();
    if(this.userIsLogged){
      const userData = this.login.getUserTokenData()
      if(userData.role === USER_ROLES.ADMIN){
        this.userIsAdmin = true;
      }
    }
  }

}
