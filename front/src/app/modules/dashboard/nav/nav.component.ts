import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userIsLogged=false;
  userEmail = '';
  userRole = '';
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.userIsLogged = this.auth.isLogged();
    const userData = this.auth.getUserTokenData();
    this.userEmail = userData.email;
    this.userRole = userData.role;
    
  }
}
