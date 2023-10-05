import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { USER_ROLES } from 'src/app/models/roles';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent implements OnInit{
  userIsLogged=false;
  userIsAdmin=false;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userIsLogged = this.auth.isLogged();
    if(this.userIsLogged){
      const userData = this.auth.getUserTokenData()
      if(userData.role === USER_ROLES.ADMIN){
        this.userIsAdmin = true;
      }
    }
  }

}
